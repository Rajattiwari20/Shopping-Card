import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { store } from './redux/store'
import { Provider } from 'react-redux'

console.log('Store =>', store)
console.log('State =>', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
)
