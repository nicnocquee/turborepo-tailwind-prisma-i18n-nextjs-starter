#!/bin/bash

# Define the directories
app_dir="./apps"
packages_dir="./packages"

# Check if the .env file exists in the packages directory
if [[ ! -f "$packages_dir/env/.env" ]]; then
    echo "The .env file does not exist in $packages_dir/env/"
    exit 1
fi

# Loop through the subdirectories of the app directory
for dir in "$app_dir"/*; do
    # Check if it is a directory
    if [[ -d "$dir" ]]; then
        # Create the symlink
        cd "$dir"
        echo `pwd`
        ln -s "../../$packages_dir/env/.env" ".env.local"
        cd -
    fi
done

cd "$packages_dir/database"
ln -s "../../$packages_dir/env/.env" ".env"