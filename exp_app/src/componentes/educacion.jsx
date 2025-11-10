import React from "react";

function Educacion() {
  const educacion = [
    {
      institucion: "I.E Alberto Diaz Muñoz",
      curso: "Bachiller Académico",
      año: 2024,
    },
    {
      institucion: "SENA - Centro de Tecnología de la Manufactura Avanzada (CTMA)",
      curso: "Tecnólogo en Análisis y Desarrollo de Software (ADSO)",
      año: "2025 - 2027",
    },
    {
      institucion: "SENA",
      curso: "Inglés Nivel 1",
      año: 2025,
    },
    {
      institucion: "SENA",
      curso: "Inglés Nivel 2",
      año: 2025,
    },
  ];

  return (
    <div>
      <ul style={{ listStyleType: "square", lineHeight: "1.8" }}>
        {educacion.map((edu, index) => (
          <li key={index}>
            <strong>{edu.curso}</strong> - {edu.institucion} ({edu.año})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Educacion;