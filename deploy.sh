#!/usr/bin/env sh

set -e

# build
npm run docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:rainy-cc/rainy-cc.github.io.git master:gh-pages

cd -