import { useState } from 'react'
import fundo from '../assets/fundo.jpg'

import { Main} from "../components/Main"
import {Footer} from '../components/Footer'

import './styles.css'

function App() {
        // <a href="https://reactjs.org" target="_blank">
        //   <img src={reactLogo} className="logo react" alt="React logo" />
        // </a>
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Main
        url={fundo}
      />
      <Footer
        link='#'
        rede='Facebook'
      />
      <Footer
        link='#'
        rede='Facebook'
      />
    </div>
  )
}

export default App
