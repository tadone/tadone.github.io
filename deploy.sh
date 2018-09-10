#!/usr/bin/env bash
set -e

cd vuepress
ls -a

git init
git add -A
git config user.name $GH_NAME
git config user.email $GH_EMAIL
git commit -m "Automated deployment to GitHub Pages: ${CIRCLE_SHA1}" --allow-empty

git push --force --quiet $CIRCLE_REPOSITORY_URL develop:master

cd -

echo "deployed successfully"
