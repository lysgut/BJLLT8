import { useState } from 'react';
import Tarjeta from './components/Tarjeta';
import Buscador from './components/Buscador';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode); 
  };
  return (
    <>
    <Navbar/>
    <h1>Aplicación sobre el Medio Ambiente</h1>
    <h4>Cuidemos Nuestro Aire
        El aire es un recurso vital e invisible que nos rodea y que, a menudo, lo damos por hecho. Sin embargo, la calidad del aire que respiramos tiene un impacto profundo en nuestra salud, nuestro entorno y el bienestar de las futuras generaciones.
        Por eso cuidemos el aire de cada parte del mundo, en esta página puedes consultar datos sobre el aire de donde vivas y de todas partes del mundo:  
    </h4>
      <Buscador />
      <Tarjeta />
      <h1> </h1>
    <h5>¿Por qué es importante el aire?
        El aire limpio es esencial para la vida.
        Proporciona el oxígeno que necesitamos para respirar y, a su vez, juega un papel crucial en la regulación del clima global. Sin aire limpio, nuestros pulmones, corazones y cerebros no podrían funcionar correctamente. Además, la contaminación del aire puede causar enfermedades respiratorias y cardiovasculares, afectando especialmente a los niños, ancianos y personas con afecciones preexistentes.
        
        ¿Qué está afectando la calidad del aire?
        Las actividades humanas, como la quema de combustibles fósiles, la deforestación y las emisiones industriales, han contribuido a una creciente contaminación atmosférica. Los gases contaminantes, como el dióxido de carbono (CO2), el monóxido de carbono (CO) y las partículas finas (PM2.5), no solo deterioran la calidad del aire, sino que también provocan el calentamiento global y el cambio climático.
        
        ¿Qué podemos hacer para proteger el aire que respiramos?
          -Reducir el uso de combustibles fósiles: Opta por formas de energía más limpias y sostenibles, como la solar o eólica, y utiliza el transporte público, la bicicleta o comparte coche cuando sea posible.
          -Promover la eficiencia energética: Mejora el aislamiento de tu hogar, utiliza electrodomésticos eficientes y apaga los aparatos eléctricos cuando no los estés usando.
          -Apoyar la reforestación: Los árboles y plantas ayudan a filtrar contaminantes y producen oxígeno. Participa en iniciativas de plantación de árboles y apoya políticas que promuevan la preservación de áreas verdes.
          -Reducir, reutilizar y reciclar: Minimiza los residuos y elige productos con menos empaque. Reciclar ayuda a reducir la necesidad de producción de nuevos materiales y la contaminación asociada.
          -Educar y sensibilizar: Comparte información sobre la importancia del aire limpio y anima a otros a tomar medidas para proteger nuestro entorno.

        Cada pequeño esfuerzo cuenta cuando se trata de preservar la calidad del aire. Con acciones conscientes y sostenibles, podemos reducir la contaminación, proteger nuestra salud y contribuir a un planeta más saludable. Nuestro futuro y el de las próximas generaciones dependen de las decisiones que tomamos hoy.
        Respiramos el mismo aire, compartimos el mismo planeta. Por eso, es fundamental que trabajemos juntos para asegurarnos de que sea lo más limpio y saludable posible. Tu compromiso marca la diferencia. ¡Actúa ahora para un aire más puro y un futuro más brillante!
      </h5>
      <Footer/>
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

