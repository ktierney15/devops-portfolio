provider "aws" {
  region     = "us-east-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

locals {
  content_type_map = {
    "js"  = "application/javascript"
    "jsx" = "application/javascript"
    "html" = "text/html"
    "css" = "text/css"
    "json" = "application/json"
  }
}

terraform {
  backend "s3" {
    bucket = "kt15-terraform-state-files"
    key    = "devops-portfolio/terraform.tfstate"
    region = "us-east-1"
  }
}

resource "aws_s3_object" "app" {
  for_each = fileset("${var.source_path}", "**")
  bucket   = aws_s3_bucket.bucket.bucket
  key      = each.value
  source   = "${var.source_path}/${each.value}"
  etag     = filemd5("${var.source_path}/${each.value}")
  content_type = lookup(local.content_type_map, split(".", each.value)[length(split(".", each.value)) - 1], "application/octet-stream")
}

resource "aws_s3_bucket" "bucket" {
  bucket = var.domain_name # "kt15-${var.app_name}"
  tags = {
    "Github Repository" = "https://github.com/ktierney15/${var.app_name}"
    "Version"           = var.ver
  }

  # website {
  #   index_document = "index.html"
  #   error_document = "index.html"
  # }
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.bucket.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = aws_s3_bucket.bucket.id

  block_public_policy     = false 
  restrict_public_buckets = false
  block_public_acls       = false 
  ignore_public_acls      = false
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.bucket.id
  depends_on = [aws_s3_bucket_public_access_block.public_access]

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = "*",
        Action = "s3:*",
        Resource = [
          "${aws_s3_bucket.bucket.arn}",
          "${aws_s3_bucket.bucket.arn}/*"
        ]
      }
    ]
  })
}


# route 53
resource "aws_route53_record" "www" {
  zone_id = var.route53_zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_s3_bucket_website_configuration.website.website_endpoint # replace(aws_s3_bucket_website_configuration.website.website_domain, "s3-website-", "s3-website.")
    zone_id                = aws_s3_bucket.bucket.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "root" {
  zone_id = var.route53_zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_s3_bucket_website_configuration.website.website_endpoint # replace(aws_s3_bucket_website_configuration.website.website_domain, "s3-website-", "s3-website.")
    zone_id                = aws_s3_bucket.bucket.hosted_zone_id
    evaluate_target_health = false
  }
}

# data "aws_route53_zone" "selected" {
#   name         = "${var.domain_name}."
#   private_zone = false
# }

