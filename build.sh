#!/bin/bash

git checkout master

npm run build
rm -rf docs/
mv dist/ docs/

git add .
git commit -am "deploy"
git push origin master

