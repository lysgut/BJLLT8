import { useState } from 'react';
import Conexion from './components/Conexion';
import Tarjeta from './components/Tarjeta';
import Buscador from './components/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Buscador />
      <Conexion />
      <Tarjeta />
    </>
  );
}

export default App;

