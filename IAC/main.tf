provider "aws" {
  region = "us-east-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

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

resource "aws_security_group" "instance_sg" {
  name        = "instance_sg"
  description = "Security group for EC2 instance"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["your_ip_address/32"]  # Restrict SSH access to your IP address
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]  # Allow outbound traffic to all destinations
  }
}

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




resource "aws_instance" "host" {
  ami                  = "${data.aws_ami.amazon-linux-2.id}"  # Amazon Linux 2 AMI (HVM), SSD Volume Type
  instance_type        = "t2.micro"
  security_groups      = [aws_security_group.instance_sg.name]
  iam_instance_profile = aws_iam_instance_profile.ssm_instance_profile.name
}

locals {
  playbook_vars = {
    docker_user = var.docker_user
    docker_pass = var.docker_pass
  }
}


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


# provider "aws" {
#   region = "us-east-1"
# }

# resource "aws_instance" "example" {
#   ami           = "ami-xxxxxxxxxxxxxxxxx"
#   instance_type = "t2.micro"
#   key_name      = "your-key-pair-name"
#   subnet_id     = "subnet-xxxxxxxxxxxxxxxxx" # Specify your subnet ID

#   security_group_names = ["your-security-group-name"]

#   user_data = <<-EOF
#               #!/bin/bash
#               # Your user data script here
#               EOF

#   tags = {
#     Name = "example-instance"
#   }
# }

# output "instance_public_ip" {
#   value = aws_instance.example.public_ip
# }