import React from "react";

function cabeceraCV({ nombre, cargo, ciudad, contacto }) {
  return (
    <header style={{ textAlign: "center", marginBottom: "30px" }}>
      <h1>{nombre}</h1>
      <h3>{cargo}</h3>
      <p>{ciudad}</p>
      <p>{contacto}</p>
    </header>
  );
}

export default cabeceraCV;