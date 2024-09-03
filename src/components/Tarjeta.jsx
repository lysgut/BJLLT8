import React from 'react';

function Tarjeta({ data }) {    
  // console.log('tarjeta =' + data)
  return (
    <div className="Tarjeta">
      <div className="card-body">
        <p>{data}</p>
        <h5 className="card-title">Estado del Aire</h5>
        <p className="card-text">{data}</p>
      </div>
    </div>
  );
}

export default Tarjeta;
