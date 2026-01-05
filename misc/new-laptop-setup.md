# New Laptop Setup

## Homebrew

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Potentially need to run this on certain Apple chips:

```shell
eval "$(/opt/homebrew/bin/brew shellenv)"
```

## Git

```shell
brew install git
```

## IDE

## AWS

```shell
brew install awscli
```

## Node

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | zsh
```

```shell
nvm install lts/<latest>
```

Potentially need to run these:

```shell
npm config set registry <registry>
npm config set auth-type legacy
```
