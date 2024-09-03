import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tarjeta from './Tarjeta';

function App() {
  const Api = 'b68723a8869ee684d1475977dfcfeae5'; 
  const [data, setData] = useState(null);
  const [city, setCity] = useState('Ciudad de Córdoba'); // Ciudad inicial

  useEffect(() => {
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api}`;
    axios.get(Url)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [city]);

  return (
    <div>
      {/* Renderizamos el componente Tarjeta y pasamos los datos como props */}
      {data ? (
        <Tarjeta
          location={data.name}
          airQuality={data.weather[0].description} // Ajusta esto según los datos que desees mostrar
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
