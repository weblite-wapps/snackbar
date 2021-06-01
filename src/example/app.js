import SnackbarContainer, { sb, globals } from '../core'

export default function App() {
  const content = {
    // title: 'خطا',
    message: 'سلامتی هر چی مرده '.repeat(10),
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
