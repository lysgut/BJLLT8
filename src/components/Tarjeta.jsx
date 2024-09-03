import React from 'react';
import './Tarjeta.css';

function Tarjeta({ location, airQuality }) {  // Recibe los datos a través de props
  return (
    <div className="Tarjeta">
      <div className="card-body">
        <p>{location}</p>
        <h5 className="card-title">Estado del Aire</h5>
        <p className="card-text">{airQuality}</p>
      </div>
    </div>
  );
}

export default Tarjeta;
