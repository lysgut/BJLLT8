import { useState } from 'react';
import axios from 'axios';
import Tarjeta from './Tarjeta';

function Buscador() {
  const [nombre, setNombre] = useState('');
  const [ciudad, setCiudad] = useState(''); 
  const Api = 'b68723a8869ee684d1475977dfcfeae5'; 
  const [data, setData] = useState(null);

  const handleInputChange = (event) => {
    setNombre(event.target.value);
    console.log(nombre)
  };  

  const handleSearchClick = () => {
    console.log(nombre)
    setCiudad(nombre);
    console.log(`https://api.openweathermap.org/data/2.5/weather?q=${nombre}&appid=${Api}`)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${nombre}&appid=${Api}`)
      .then(res=>{
      setData(res.data)
      console.log(data)
    })
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Ingresar Ciudad"
          value={nombre}
          onChange={handleInputChange}
        />
        <button type="button" class="btn btn-secondary" onClick={handleSearchClick}>Boton</button>
        <Tarjeta data={data}/>
      </div>
    </>
  );
}

export default Buscador;
