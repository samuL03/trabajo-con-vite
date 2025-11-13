import React from "react";

function educacion({ estudios }) {
  return (
    <ul style={{ listStyleType: "square", lineHeight: "1.8" }}>
      {estudios.map((edu, index) => (
        <li key={index}>
          <strong>{edu.curso}</strong> - {edu.institucion} ({edu.año})
        </li>
      ))}
    </ul>
  );
}

export default educacion;