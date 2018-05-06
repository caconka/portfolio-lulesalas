#!/bin/bash

git checkout master

npm run build
rm -rf docs/
mv dist/ docs/

echo lulesalas.com >> docs/CNAME

vim docs/index.html

