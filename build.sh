#!/bin/bash

git checkout master

npm run build
rm -rf docs/
mv dist/ docs/

vim docs/index.html

