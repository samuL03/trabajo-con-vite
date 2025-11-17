import React from "react";

function perfil({ resumen }) {
  return (
    <section style={{ marginBottom: "20px" }}>
      <h2>Perfil Profesional</h2>
      <p>{resumen}</p>
    </section>
  );
}

export default perfil;