import React from 'react';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
    <a className="navbar-brand" href="#">
      <img src="https://web.whatsapp.com/aaf4b91a-4e72-478b-873d-7540a65dd4b4" alt="Logo" className="navbar-logo" />

    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Características</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
