import SnackbarContainer, { sb } from '../core'

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          const id = sb.success({ title: 'Hi', message: 'new Message' })
          setTimeout(() => {
            sb.clear(id)
          }, 500)
        }}
      >
        show info
      </button>
      <SnackbarContainer limit={3} />
    </div>
  )
}

setTimeout(() => sb.success({ title: 'second Title' }), 1000)
