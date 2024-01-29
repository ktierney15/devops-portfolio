provider "aws" {
  region = "us-east-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

# Amazon Linux 2 AMI (HVM), SSD Volume Type
data "aws_ami" "amazon-linux-2" {
 most_recent = true

 filter {
   name   = "owner-alias"
   values = ["amazon"]
 }

 filter {
   name   = "name"
   values = ["amzn2-ami-hvm*"]
 }
}

# User Data to run ansible playbook
data "cloudinit_config" "server_config" {
  gzip          = true
  base64_encode = true

  part {
    content_type = "text/cloud-config"
    content      = templatefile("${path.module}/templates/cloud-init.yaml",
      {
        playbook      = base64encode(file("${path.module}/playbooks/playbook.ansible.yaml"))
        playbook_vars = base64encode(jsonencode(local.playbook_vars))
      }
    )
  }

}


resource "aws_security_group" "server_group" {
  name        = "server_group"
  description = "Allow HTTP traffic"

  vpc_id = aws_vpc.example.id

  // Define inbound rule to allow HTTP traffic from any source
  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  // Define outbound rule to allow all outbound traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}


# IAM role for session manager
resource "aws_iam_role" "ssm_role" {
  name               = "ssm_role"
  assume_role_policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "Service": "ec2.amazonaws.com"
        },
        "Action": "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "ssm_policy_attachment" {
  role       = aws_iam_role.ssm_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

resource "aws_iam_instance_profile" "ssm_instance_profile" {
  name = "ssm_instance_profile"
  role = aws_iam_role.ssm_role.name
}

resource "aws_instance" "host" {
  ami                  = "${data.aws_ami.amazon-linux-2.id}"
  instance_type        = "t2.micro"
  iam_instance_profile = aws_iam_instance_profile.ssm_instance_profile.name
  user_data            = data.cloudinit_config.server_config.rendered
  key_name             = "default-ec2"

  vpc_security_group_ids = [aws_security_group.server_group.id] 
}

locals {
  playbook_vars = {
    docker_user = var.docker_user
    docker_pass = var.docker_pass
  }
}
