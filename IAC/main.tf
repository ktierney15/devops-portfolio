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
}

locals {
  playbook_vars = {
    docker_user = var.docker_user
    docker_pass = var.docker_pass
  }
}
