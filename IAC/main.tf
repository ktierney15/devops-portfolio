provider "aws" {
  region = "us-east-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}


locals {
  content_type_map = {
    "js" = "application/javascript"
    "jsx" = "application/javascript"
    "html" = "text/html"
    "css" = "text/css"
    "json" = "application.json"
  }
}

terraform {
  backend "s3" {
    bucket         = "kt15-terraform-state-files"
    key            = "${var.app_name}/terraform.tfstate"
    region         = "us-east-1"
  }
}

resource "aws_s3_object" "app" {
  for_each = fileset("${var.source_path}", "**")
  bucket = aws_s3_bucket.bucket.bucket
  key = each.value
  source = "${var.source_path}/${each.value}"
  etag = filemd5("${var.source_path}/${each.value}")
  content_type = lookup(local.content_type_map, split(".", "${var.source_path}/${each.value}")[1], "application/octet-stream")
}

resource "aws_s3_bucket" "bucket" {
  bucket = "kt15-${var.app_name}"
  tags = {
    "Github Repository" = "https://github.com/ktierney15/${var.app_name}"
    "Version" = var.version
  }

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = "kt15-${var.app_name}"
  policy = data.aws_iam_policy_document.website_policy.json
}

resource "aws_s3_bucket_policy" "website_policy" {
  bucket = aws_s3_bucket.website_bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "PublicReadGetObject",
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.website_bucket.arn}/*"
      }
    ]
  })
}
