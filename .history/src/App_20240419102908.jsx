import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {Scanner} from '@yudiel/react-qr-scanner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Scanner
          onResult={(result) => console.log(result)}
          onError={(error) => console.log(error?.message)}
      />       
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
     
    </>
  )
}

export default App
