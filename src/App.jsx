import { useState, useEffect } from 'react';
import axios from 'axios';
import Tarjeta from './components/Tarjeta';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Texto from './components/Texto';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [nombre, setNombre] = useState('');
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

  const Api = 'b68723a8869ee684d1475977dfcfeae5';

  useEffect(() => {
    if (nombre) {
      const Url = `https://api.openweathermap.org/data/2.5/weather?q=${nombre}&appid=${Api}`;
      axios.get(Url).then(res => {
        setData(res.data);

        const { lat, lon } = res.data.coord;
        const Url_especifico = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${Api}`;
        return axios.get(Url_especifico);
      }).then(res => {
        setData2(res.data);
      }).catch(error => {
        console.error("Error fetching data:", error);
      });
    }
  }, [nombre]);

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <>
      <Navbar />
      <Texto />
      <input type="text" value={nombre} onChange={handleInputChange} placeholder="Ingrese el nombre de la ciudad" />
      <button>Buscar</button>
      <Tarjeta data={data} airQuality={data2?.list?.[0]?.main?.aqi || 'N/A'} />
      <Footer />
      <div className="App">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Restaurar color original' : 'Oscurecer'}
        </button>
        {isDarkMode && <div className="overlay"></div>}
      </div>
    </>
  );
}

export default App;
