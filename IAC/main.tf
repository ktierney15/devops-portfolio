provider "aws" {
  region = "us-east-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

resource "aws_instance" "test" {
  ami           = "ami-0c55b159cbfafe1f0"  # Amazon Linux 2 AMI (HVM), SSD Volume Type
  instance_type = "t2.micro"
}

locals {
  playbook_vars = {
    docker_user = lookup(var, "docker_user", "username")
    docker_pass = lookup(var, "docker_pass", "password")
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