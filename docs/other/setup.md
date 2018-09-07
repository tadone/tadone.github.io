Personal Setup
===
---

# ZSH

```bash
# Install ZSH
dnf install zsh

# Switch to ZSH and clone zimfw
exec zsh
git clone --recursive https://github.com/zimfw/zimfw.git ${ZDOTDIR:-${HOME}}/.zim

# Paste to set up .zim files
setopt EXTENDED_GLOB
for template_file ( ${ZDOTDIR:-${HOME}}/.zim/templates/* ); do
  user_file="${ZDOTDIR:-${HOME}}/.${template_file:t}"
  touch ${user_file}
  ( print -rn "$(<${template_file})$(<${user_file})" >! ${user_file} ) 2>/dev/null
done

# Change shell to ZSH
chsh -s `which zsh`

# Source .zlogin
source ${ZDOTDIR:-${HOME}}/.zlogin

# Change prompt in ~/.zimrc
zprompt_theme='pure'

# Add docker zsh completions
curl -fLo ~/.zim/modules/completion/external/src/_docker https://raw.githubusercontent.com/docker/cli/master/contrib/completion/zsh/_docker

# Add AWS ZSH Completions (Fedora)
# include this in .zshrc
source /usr/share/zsh/site-functions/aws_zsh_completer.sh

# You may have to force rebuild zcompdump:
rm -f ~/.zcompdump; compinit

# To Update zimfw:
zmanage update

# Add aliases to ~/.zshrc
alias nssh='ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -q'
alias dps='docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Ports}}"'
alias ssh_config='$EDITOR ~/.ssh/config'
alias diff='colordiff "$@"'
```

# Linux
How to Show Asterisks While Typing Sudo Password in Linux ``****``
```bash
$ visudo
# Append pwfeedback to line with: Defaults env_reset
Defaults env_reset,pwfeedback
$ reset
```
