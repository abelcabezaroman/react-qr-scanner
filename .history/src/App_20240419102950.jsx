import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {Scanner} from '@yudiel/react-qr-scanner';

function App() {

  return (
    <>
      <div>
      <Scanner
          onResult={(result) => console.log(result)}
          onError={(error) => console.log(error?.message)}
      />        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     
    </>
  )
}

export default App
