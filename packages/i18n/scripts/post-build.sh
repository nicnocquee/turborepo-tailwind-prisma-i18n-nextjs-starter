#!/bin/bash

sed -i'.original' '1,1s/^/"use client";\n/' "./dist/client/index.mjs"