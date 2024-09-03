import { useState } from 'react';
import Tarjeta from './components/Tarjeta';
import Buscador from './components/Buscador';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <h1>Aplicación sobre el Medio Ambiente</h1>
      <Buscador />
      <Tarjeta />
      <Footer/>
    </>
  );
}

export default App;

