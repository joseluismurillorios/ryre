## Prerequisites

- [Node 8.11.2](https://nodejs.org/fr/blog/release/v8.11.2/)
- An .env file containing a [Service Account](https://cloud.google.com/compute/docs/access/service-accounts) to run this api.

# Install Prerequisites (OSX, Linux)

- [nvm](https://github.com/nvm-sh/nvm)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

```sh
export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

```bash
nvm install 8.11.2
```

- [Firebase](https://console.firebase.google.com)

1. Create/Open a project
2. Generate and download Service Account JSON
3. Create an .env file with generated Firebase info and place it on the root folder


## Installation

Install depenndencies.

```bash
npm install
```

Run server local.

```bash
npm run local
```

Run develompent server.

```bash
npm run dev
```

## TODO:
- Api to edit report info
- A detailed user manual
- Direct private messaging
- Add english language
- Integrate cordova for mobile deployment

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)