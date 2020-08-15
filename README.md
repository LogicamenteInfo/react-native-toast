# React-Native-Toast

[ ![NPM version](http://img.shields.io/npm/v/@logicamente.info/react-native-toast.svg?style=flat)](https://www.npmjs.com/package/@logicamente.info/react-native-toast)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/logicamenteinfo/react-native-toast/master/LICENSE)

Another toast for RN, but now without relying on native module as ToastAndroid
to make the job done.

## Content

  - [Installation](#installation)
  - [Demo](#demo)
  - [Getting started](#getting-started)
  - [Usage](#usage)

## Installation

1. Run `yarn add @logicamente.info/react-native-toast` or `npm i -S @logicamente.info/react-native-toast`
2. `import ToastContainer from '@logicamente.info/react-native-toast'` then put this component anywhere in the highest order component of your app (commonly at App.js)
3. `import { Toast } from '@logicamente.info/react-native-toast'` then call `Toast('This is my message')` wherever you need

## Demo

Check it out running at https://snack.expo.io/@logicamente.info/react-native-toast.

You can also clone this repo and run `yarn start` to make it run locally.

## Getting started

```js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ToastContainer, { Toast } from '@logicamente.info/react-native-toast';

export default function App() {
  return (
    <View>
      <ToastContainer />
      <Button
        title="Show Toast"
        onPress={() => Toast('This is my message')} />
    </View>
  );
}
```

## Usage

This lib exports some useful resource to customize it to your needs.

Resource | Description
--- | ---
ToastContainer | The main react component, should be placed at the highest order component in the app.
Toast   | Main function to **show the toast**. <br> `Toast(text, position, duration)` <br> Where <br> - *text* can be "string" or a \<Component \\> <br> - *position* needs to be one of *ToastPosition* options (default: `ToastPosition.BOTTOM`) <br> - *duration* is the number in miliseconds the toast shall be visible (default: `ToastDuration.SHORT`)
ToastPosition | It is a set of [React Native StyleSheets](https://reactnative.dev/docs/stylesheet) that determines the position where the toast will appear. <br> Available options are <br> - `ToastPosition.TOP` <br> - `ToastPosition.BOTTOM` (default) <br> - `ToastPosition.LEFT` <br> - `ToastPosition.RIGHT` <br> - `ToastPosition.CENTER`
ToastDuration | A set of timers to configure your toast. <br> Avaliable options are <br> - `ToastDuration.SHORT` (default) <br> - `ToastDuration.LONG` <br> - `ToastDuration.INFINITE` <br><br> You can inform your own duration in miliseconds when calling `Toast`, but **if you set it to zero, negative or `ToastDuration.INFINITE` then the toast will not close** unless you do it programmatically.
ToastHide | A function to **close the toast**. Meaningful if the toast duration is infinite.

You can also change the `ToastContainer` base style to suit your needs

```js
  <ToastContainer style={{ backgroundColor: 'blue' }} />
```
## Contribution

Issues and PRs are welcome. Add a screenshot of bug and code snippet. Open a issue to discuss changes.