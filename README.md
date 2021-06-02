# snackbar

<p align="center">
  <a href="https://github.com/weblite-wapps/snackbar/blob/master/license">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>

  <a href="https://bundlephobia.com/result?p=@web-lite/snackbar">
    <img src="https://img.shields.io/bundlephobia/minzip/@web-lite/snackbar.svg" alt="downloads" />
  </a>
</p>

## Installation

```
yarn add react-toastify @web-lite/snackbar
```

## Note

This package has been built on top of followings

```
    "@material-ui/core": "^4.11.3",
    "@material-ui/icons": "^4.11.2",
    "clsx": "^1.1.1",
    "react": "^16.8.0  || ^17.0.0",
    "react-dom": "^16.8.0  || ^17.0.0"
```

You may need to install every dependencies which has not been installed yet

🩰 Hopefully it won't need any thing to install

## Example

```jsx
import SnackbarContainer, { sb, globals } from '@web-lite/snackbar'
import '@web-lite/snackbar/style.min.css'

export default function App() {
  const content = {
    title: 'Poison Quotes',
    message:
      'Cheers for everyone who is man, cause everyone who is man, is different from every man.',
    config: {
      position: globals.SNACKBAR_POSITIONS.TOP_CENTER,
      closeOnClick: true,
    },
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={sb.success.bind(null, content)}>show success</button>
      <button onClick={sb.info.bind(null, content)}>show info</button>
      <button onClick={sb.warn.bind(null, content)}>show warn</button>
      <button onClick={sb.error.bind(null, content)}>show error</button>
      <SnackbarContainer limit={3} rtl={true} />
    </div>
  )
}

setTimeout(() => sb.success({ title: 'second Title' }), 10000)
```
