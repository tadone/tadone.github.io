#!/usr/bin/env bash
set -e

git config user.name $GH_NAME
git config user.email $GH_EMAIL

git checkout master
git pull origin master

find . -maxdepth 1 ! -name 'vuepress' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv vuepress/* .
rm -R vuepress/

git add -fA
git commit --allow-empty -m "$(git log develop -1 --pretty=%B)"
git push -f origin $TARGET_BRANCH

echo "deployed successfully"
