#!/usr/bin/env bash
set -e
CYAN="\u001b[36m"
GREEN="\u001b[32m"
# RESET
RESET="\u001b[0m"

git config --global user.email $GH_EMAIL
git config --global user.name $GH_NAME

echo -e "${CYAN}Git Clone${RESET}"
git clone $CIRCLE_REPOSITORY_URL out

cd out
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
find . -maxdepth 1 ! -name '.git' ! -name '.circleci' ! -name '.gitignore' -exec git rm -rf {} \;
#git rm -rf .
mkdir -p .circleci && cp -a ../.circleci/. .circleci/.
cp -a ../vuepress/. .

# cd ..
# mkdir -p out/.circleci && cp -a .circleci/. out/.circleci/.

# cd out
echo -e "${CYAN}Git Commit${RESET}"
git add -A
git commit --allow-empty -m "$(git log origin/develop -1 --pretty=%B) for GitHub Pages: ${CIRCLE_SHA1}"

echo -e "${CYAN}Git Push${RESET}"
git push origin $TARGET_BRANCH

echo -e "${GREEN}Deployed successfully${RESET}"
