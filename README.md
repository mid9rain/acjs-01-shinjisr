## AstroCamp JavaScript Homework


### 環境準備

* 安裝 homebrew

* 安裝 git

* 安裝 asdf

```
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.7.1
echo -e '\n. $HOME/.asdf/asdf.sh' >> ~/.bash_profile
echo -e '\n. $HOME/.asdf/completions/asdf.bash' >> ~/.bash_profile
```

* 安裝 nodejs
```
asdf plugin-add nodejs
brew install coreutils gpg
bash ~/.asdf/plugins/nodejs/bin/import-release-team-keyring
asdf list-all nodejs
asdf install nodejs 10.15.3
```

### 下載專案
```
git clone 你的作業 repo 的網址
```

### 安裝套件
```
cd JS_HomeWork_01
npm install
```

### 試試看
```
npm test
```
