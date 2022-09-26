import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home'


import './styles/global.css'
// import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />    
  </React.StrictMode>
)
