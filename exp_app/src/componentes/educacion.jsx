function Educacion() {
  const estudios = [
    { institucion: "SENA", curso: "Tecnólogo en Análisis y Desarrollo de Software", año: 2025 },
    { institucion: "Google", curso: "Curso de React Avanzado", año: 2024 },
    { institucion: "Platzi", curso: "Fundamentos de JavaScript", año: 2023 },
    { institucion: "Udemy", curso: "Diseño Web Responsivo", año: 2023 },
    { institucion: "Coursera", curso: "Bases de Datos con SQL", año: 2024 },
    { institucion: "SENA", curso: "Programación en Node.js", año: 2025 },
    { institucion: "Alura", curso: "React Hooks y Context API", año: 2024 },
    { institucion: "SENA", curso: "Git y GitHub Básico", año: 2023 },
    { institucion: "FreeCodeCamp", curso: "Responsive Web Design", año: 2022 },
    { institucion: "Microsoft Learn", curso: "Introducción a Azure", año: 2024 }
  ];

  return (
    <div>
      <h2>Educación</h2>
      {estudios.map((edu, index) => (
        <div key={index}>
          <h3>{edu.curso}</h3>
          <p><strong>Institución:</strong> {edu.institucion}</p>
          <p><strong>Año:</strong> {edu.año}</p>
        </div>
      ))}
    </div>
  );
}

export default Educacion;
