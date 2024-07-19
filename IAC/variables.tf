variable "app_name" {
    type        = string
    description = "Name of application"
}

variable "source_path" {
    type        = string
    description = "Path to source code"
}

variable "ver" {
    type        = string
    description = "Version of application"
}

variable "aws_access_key" {
    type        = string
    description = "AWS access key"
}

variable "aws_secret_key" {
    type        = string
    description = "AWS secret key"
}