import React from 'react';

function Tarjeta({ data }) {    
  if (!data) {
    return <div>Loading...</div>; // O cualquier mensaje de carga que prefieras
  }
  return (
    <div className="Tarjeta">
      <div className="card-body">
        <h5 className="card-title">Estado del Aire</h5>
      </div>
      <Tarjeta
          location={data.name}
          airQuality={data.weather[0].description} 
          state={data.sys.state}  
          country={data.sys.country}  
        />
    </div>
  );
}

export default Tarjeta;
