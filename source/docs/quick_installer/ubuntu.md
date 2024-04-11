---
sidebar_position: 1
---

# Ubuntu

> Collection ubuntu dev-tools

## [Github Desktop](https://github.com/shiftkey/desktop/releases)

## NVM
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

## Pyenv
choose one of two
```shell
sudo apt install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python-openssl git

sudo curl https://pyenv.run | bash
```

```shell
sudo apt install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python-openssl git

git clone https://github.com/pyenv/pyenv.git ~/.pyenv
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
source  ~/.bashrc
```

## wechat

```shell
# 下载Wine环境包：
wget http://archive.ubuntukylin.com/software/pool/partner/ukylin-wine_70.6.3.25_amd64.deb

# 下载微信（wine）包：
wget http://archive.ubuntukylin.com/software/pool/partner/ukylin-wechat_3.0.0_amd64.deb

sudo apt-get install -f -y ./ukylin-wine_70.6.3.25_amd64.deb

sudo apt-get install -f -y ./ukylin-wechat_3.0.0_amd64.deb
```
