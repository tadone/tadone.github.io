#!/usr/bin/env bash
set -e

git config user.name $GH_NAME
git config user.email $GH_EMAIL

echo "checkout master"
git checkout master
#git pull origin master

echo "delete all files except .git and vuepress"
find . -maxdepth 1 ! -name 'vuepress' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv vuepress/* .
rm -R vuepress/

git add -fA
git commit --allow-empty -m "$(git log develop -1 --pretty=%B)"

echo "push to master"
git push -f origin master

echo "deployed successfully"
