provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "example" {
  ami           = "ami-xxxxxxxxxxxxxxxxx"
  instance_type = "t2.micro"
  key_name      = "your-key-pair-name"
  subnet_id     = "subnet-xxxxxxxxxxxxxxxxx" # Specify your subnet ID

  security_group_names = ["your-security-group-name"]

  user_data = <<-EOF
              #!/bin/bash
              # Your user data script here
              EOF

  tags = {
    Name = "example-instance"
  }
}

output "instance_public_ip" {
  value = aws_instance.example.public_ip
}