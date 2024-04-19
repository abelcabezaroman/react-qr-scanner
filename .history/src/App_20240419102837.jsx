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
      <Scanner
          onResult={(result) => console.log(result)}
          onError={(error) => console.log(error?.message)}
      />      
    </>
  )
}

export default App
