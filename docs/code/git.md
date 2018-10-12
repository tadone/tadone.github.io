---
title: "Git"
sidebarDepth: 2
---

# General Info
Great Tutorial: https://www.atlassian.com/git/tutorials/setting-up-a-repository

**origin** is an alias on your system for a particular remote repository. It's not actually a property of that repository.

By doing: `git push origin branchname`

We're pushing to **origin** repository, which is an alias to URL of the repository. In the push command, we can use remotes or we can simply use a URL directly. An example that uses the URL:
`git push git@github.com:user/branchname.git branchname`

# Basic Operations
```bash
git clone git://example.com/myproject             # Clone existing "myproject" repository
cd myproject

git status                                        # Shows status for tracked/modified/untracked files

git checkout <branch>                             # Switch to a different branch
git checkout -b <branch-name>                     # Create new branch and switch to it

git branch                                        # List local branches for repository
git branch -a                                     # List all branches for repository (including remote)
git branch -d <branch-name>                       # Delete local branch
git branch -D <branch-name>

git add * or git add <some_file>                  # Add all/single file to be tracked by Git
git commit -am "Add first draft of some feature"  # Commit changes with a custom message
git push origin <branch-name>                     # Push changes upstream (Github, Gitlab, BitBucket etc.)

git remote -v                                     # Display URLs referring to origin alias
git remote set-url origin git@github.com:someuser/newprojectname.git # Set new URL for remote
```
## git pull
Merge upstream changes into your local repository.

_Usage:_
`git pull origin`

Fetch the specified remote’s copy of the current branch and immediately merge it into the local copy. This is the same as:
`git fetch <remote>` followed by `git merge origin/<current-branch>`

The **--rebase** option can be used to ensure a linear history by preventing unnecessary merge commits. Many developers prefer rebasing over merging, since it’s like saying, "I want to put my changes on top of what everybody else has done."
`git pull --rebase origin <branch-name>`

_Example:_
The following example demonstrates how to synchronize with the central repository's master branch:
```bash
git checkout <branch-name>        # Switch to a new branch
git pull --rebase origin          # Merge upstream changes from origin into current <branch-name> (using rebase)
```
This simply moves your local changes onto the top of what everybody else has already contributed.

## interactive rebase
_Don't rebase public history_
you should never rebase commits once they've been pushed to a public repository. The rebase would replace the old commits with new ones and it would look like that part of your project history abruptly vanished.
```bash
git checkout <some-branch>
git rebase -i HEAD~3              # Allows sqashing commits in the last three commits in current branch
git rebase -i <some-branch>       # Interactive rebase in current branch
git commit -am "Big Commit"       # Commit changes after squashing smaller commits
git push origin <some-branch>     # Push changes upstream
```
## Push
Pushing is how you transfer commits from your local repository to a remote repo.

_Usage:_
`git push <to remote, upstream branch, usually origin> <from local branch>`

_Example:_
```bash
git checkout <branch-name>
# make changes to code
git push origin <branch-name>     # Push changes upstream
```

## Merge
**git merge** will combine multiple sequences of commits into one unified history. In the most frequent use cases, git merge is used to combine two branches.

_Example:_
```bash
git status                        # Check that current branch is the receiving branch
git checkout <receiving-branch>   # If needed switch to receiving branch
git pull origin                   # Pull latest upstream changes
git merge <branch-name>           # Merge <branch-name> into current branch which is <receiving-branch>
git branch -d <branch-name>       # Delete the branch after merging
```

## Log & Diff
```bash
git shortlog                                # Quick summary of commits sorted by author
git log --graph --oneline --decorate        # Nice graph showing commits
git log --author="Bartek Gola"              # View commits by author

# DIFF
git diff develop master -- myfile.cs        # Compare myfile.cs between develop and master
git diff HEAD                               # Changes since last commit
git diff <other-branch>                     # Difference between two branches
git diff <branch-name> origin/<branch-name> # Difference between local and remote origin
git diff --summary <branch-name>            # Summary of changes since last commit against some branch
```

## Stash
```sh
git stash                         # Takes modified tracked files and staged changes and saves it...
                                  # ... on a stack of unfinished changes that you can reapply at any time
git stash list                    # To see stored stashes
git stash show                    # Show which files have stashed changes (most recent)
git stash -p                      # Show actual changes to the stashed files

git stash apply                   # Apply stashed changes back to the files

git stash drop                    # Drop the stash
git stash pop                     # Apply stashed changes and immediately drop the stash

git stash branch                  # Create a branch from the stashed changes/files
```

# Undoing changes
**git reset**
```bash
git reset HEAD~1                      # Un-commit changes since last commit

# THIS WILL DELETE LOCAL FILES:
git fetch --all                       # Fetch all changes first
git reset --hard origin/<branch_name> # Reset files to the one from the branch!
```
# Advanced
```bash
# Delete local branches that were pushed upstream:
git branch -r | awk '{print $1}' | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin) | awk '{print $1}' | xargs git branch -d
# Checkout single file from another branch into current one:
git checkout <some-branch>
git checkout <another-branch> -- some_file.txt    # Copy some_file.txt from another-branch into current branch
```
## Forking
Keep your fork up to date with original:

1. Clone your fork:
```bash
git clone git@github.com:YOUR-USERNAME/YOUR-FORKED-REPO.git
```
2. Add remote from original repository in your forked repository:
```bash
cd into/cloned/fork-repo
git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git
git fetch upstream
```
3. Updating your fork from original repo to keep up with their changes:
```bash
git pull upstream master
```
