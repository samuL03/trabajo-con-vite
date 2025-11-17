import React from "react";

function experiencia({ experiencia }) {
  return (
    <div>
      {experiencia.map((exp, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{exp.cargo}</strong> - {exp.empresa} ({exp.año})<br />
          <em>{exp.descripcion}</em>
        </div>
      ))}
    </div>
  );
}

export default experiencia;