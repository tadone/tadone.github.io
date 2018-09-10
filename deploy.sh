#!/usr/bin/env bash
set -e
GREEN="\u001b[32m"
BOLD="\u001b[1m"
# RESET
RESET="\u001b[0m"

git config --global user.email $GH_EMAIL
git config --global user.name $GH_NAME

echo -e "${BOLD}Git Clone${RESET}"
git clone $CIRCLE_REPOSITORY_URL out

cd out
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
#find . -maxdepth 1 ! -name '.git' ! -name '.circleci' ! -name '.gitignore' -exec git rm -rf {} \;
git rm -rf .
cp -av ../vuepress/ .

cd ..
mkdir -p out/.circleci && cp -a .circleci/. out/.circleci/.

cd out
echo -e "${BOLD}Git Commit${RESET}"
git add -A
git commit --allow-empty -m "Automated deployment to GitHub Pages: ${CIRCLE_SHA1}"

echo -e "${GREEN}Git Push${RESET}"
git push origin $TARGET_BRANCH

echo "deployed successfully"


#
# git config user.name $GH_NAME
# git config user.email $GH_EMAIL
#
# echo -e "${GREEN}checkout master${RESET}"
# git checkout master
#
# echo -e "${GREEN}Git Pull${RESET}"
# git pull origin master
#
# echo "delete all files except .git and vuepress"
# find . -maxdepth 1 ! -name 'vuepress' ! -name '.git' ! -name '.circleci' ! -name '.gitignore' -exec rm -rf {} \;
# mv vuepress/* .
# rm -R vuepress/
#
# git add -fA
# git commit --allow-empty -m "$(git log develop -1 --pretty=%B)"
#
# echo "push to master"
# git push origin master
#
# echo "deployed successfully"
