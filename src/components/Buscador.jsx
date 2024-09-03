import { useState } from 'react'
import Conexion from './Conexion'
function Buscador() {
  const [nombre, setNombre] = useState('');

  const handleInputChange = (event) => {
    setNombre(event.target.value);
    console.log(nombre)
  };


  return (
    <>
      <div>
      <input type="text" placeholder="Ingresar Ciudad" value={nombre} onChange={handleInputChange} 
      />
      <Conexion nombre={nombre} />
    </div>
    </>
  )
}

export default Buscador
