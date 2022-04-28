terraform {
  backend "gcs" {
    bucket = "my-ezc-project"
    prefix  = "state"
  }
}
