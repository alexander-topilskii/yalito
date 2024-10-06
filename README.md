# Wishlist App - Firebase Hosting Repository

This repository contains the code and GitHub Actions needed to deploy the **Wishlist App** on Firebase Hosting.

## Overview

The **Wishlist App** helps users organize their gift wishes and share them with friends and family. The repository serves a static HTML landing page for the app.

## GitHub Actions

- **Deploy on Pull Request**: Deploys a preview version when a Pull Request is created.
  - **Configuration**: `.github/workflows/deploy-on-pr.yml`
- **Deploy on Merge to Main**: Deploys to the live environment when changes are merged to `main`.
  - **Configuration**: `.github/workflows/deploy-on-merge.yml`