import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Conexion from './components/Conexion'
import Tarjeta from './components/Tarjeta'
import Buscador from './components/Buscador'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Buscador/>
      <Conexion/>
      <Tarjeta/>
    </>
  )
}

export default App
