import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Conexion(nombre) {
  const Api = 'b68723a8869ee684d1475977dfcfeae5'; 
  const [data, setData] = useState(null);
  useEffect(() => {
    if (nombre) { // Solo hace la solicitud si 'nombre' no está vacío
        const Url = `https://api.openweathermap.org/data/2.5/weather?q=${nombre}&appid=${Api}`;
        axios.get(Url).then(res => {setData(res.data);}).catch(error => {
            console.error("Error fetching data:", error);});}
    }, [nombre]);

  return (
    <div>
     
    </div>
  );
}

export default Conexion;

