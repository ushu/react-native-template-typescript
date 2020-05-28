# :space_invader: React Native Template TypeScript (Updated)

This is a fork of the official template for Typescript.

It adds a few customisations to match my personal preferences:
- a custom prettier config, with husky to format-on-commit
- a simple project structure organied in feature directories (in `src/`)
- `react-navigation` installed by default

## :arrow_forward: Usage

### Note on the legacy CLI
There seems to be quite some confusion about the legacy CLI. This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`), for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

Further information can be found here: https://github.com/react-native-community/cli#about

### `react-native@0.62.0` or higher

```sh
npx react-native init MyApp --template git://github.com/ushu/react-native-template-typescript.git
```

### Running the app in development

```sh
# Start the packager in terminal
$ yarn start
# Launch the simulator
$ yarn react-native run-ios # or run-android
```

### Troubleshooting

This templace requires the latest `react-native` CLI installed.
In case of an error, be sure to install the Community CLI globaly:

```sh
# Uninstall the old CLI package
$ npm uninstall -g react-native-cli
# Install the new "Community" CLI
$ yarn global add @react-native-community/cli
```

## :bookmark: License

This project is [MIT](LICENSE) licensed.
