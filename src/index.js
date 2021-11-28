import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { store } from './redux/store'

console.log('Store =>', store)
console.log('State =>', store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
