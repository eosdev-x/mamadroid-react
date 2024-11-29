#!/bin/bash
# Remove existing directories
rm -rf dist Dist

# Run the build
npm run build

# Create Dist directory and copy files
mkdir -p Dist
cp -r dist/* Dist/