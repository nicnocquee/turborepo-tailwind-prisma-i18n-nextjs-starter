#!/bin/bash

sed -i'.original' '1,1s/^/"use client"; /' "./dist/index.js"
sed -i'.original' '1,1s/^/"use client"; /' "./dist/index.mjs"