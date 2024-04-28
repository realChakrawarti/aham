---
title: "How to Setup Windows Subsystem for Linux (WSL)"
excerpt: "Step by step to setup WSL on Windows OS"
date: 1707071400000
tags: ['WSL', 'Linux', 'Windows']
---

### To enable WSL 

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

Auto restart LxssManager after system restart: `sc config LxssManager start=auto`

- To view the distributions currently on the system: `wsl --list` or `wsl -l`
- To view the available distributions online: `wsl --list --oneline` or `wsl -l -o`
- To install a distribution: `wsl --install  -d <DistributionName>`, for Distribution, use the name from `wsl -l -o` 
- To see the status of all the distributions and also the running state: `wsl --list --verbose` or `wsl -l -v`
- To terminate the specified distribution, or stop it from running: `wsl --terminate <DistributionName>` or `wsl -t <DistributionName>`
- To unregister and uninstall a distribution: `wsl --unregister <DistributionName>`
- To immediately terminate all running distribution: `wsl --shutdown`

### How to setup Zsh & Oh My Zsh

>**_Zsh_** is a shell designed for interactive use, although it is also a powerful scripting language. Many of the useful features of _bash_, _ksh_, and _tcsh_ were incorporated into zsh; many original features were added.

Oh My Zsh is a community-driven framework for managing your zsh configuration.

```bash
sudo apt install wget
sudo apt install git
sudo apt install zsh
```

- To install and set zsh as default shell: `sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"`

#### To install "powerlevel10k" theme

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

- To update the theme in ~/.zshrc file:
	- Open the zsh config file in nano or editor of your choice: `nano ~/.zshrc` and then 
	- Set `ZSH_THEME="powerlevel10k/powerlevel10k"` instead of `ZSH_THEME="robbyrussell"`

Restart the terminal or `exec zsh`, to do the first time setup for the look and feel of the theme. If configuration wizard doesn't show up run `p10k configure`.

### References:
- Basic commands in WSL: https://learn.microsoft.com/en-us/windows/wsl/basic-commands
- Learn more on WSL: https://learn.microsoft.com/en-us/windows/wsl/
- Zsh: https://www.zsh.org/
- Oh My Zsh: https://github.com/ohmyzsh/ohmyzsh
- Powerlevel10k theme: https://github.com/romkatv/powerlevel10k