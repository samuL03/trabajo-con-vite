function Experiencia() {
  const experiencias = [
    { cargo: "Ingeniero de Software Junior", empresa: "SENA", año: 2025, descripcion: "Participación en desarrollo de aplicaciones web y mantenimiento de código." },
    { cargo: "Programador Full Stack", empresa: "SENA", año: 2025, descripcion: "Implementación de frontend en React y backend con Node.js." },
    { cargo: "Especialista en UX/UI", empresa: "SENA", año: 2025, descripcion: "Optimización de la experiencia del usuario y diseño de interfaces interactivas." },
    { cargo: "Tester QA", empresa: "SENA", año: 2025, descripcion: "Ejecución de pruebas y reporte de errores en aplicaciones web." },
    { cargo: "Administrador de Sistemas", empresa: "SENA", año: 2025, descripcion: "Configuración y mantenimiento de entornos de desarrollo y servidores." },
    { cargo: "Consultor Tecnológico", empresa: "SENA", año: 2025, descripcion: "Asesoría en herramientas y procesos de transformación digital." },
    { cargo: "Desarrollador de Aplicaciones Web", empresa: "SENA", año: 2025, descripcion: "Creación de soluciones responsivas con HTML, CSS y JavaScript." },
    { cargo: "Gestor de Proyectos TI", empresa: "SENA", año: 2025, descripcion: "Coordinación de equipos de desarrollo y control de versiones en proyectos ágiles." },
    { cargo: "Especialista en Bases de Datos", empresa: "SENA", año: 2025, descripcion: "Diseño y administración de bases de datos SQL y NoSQL." },
    { cargo: "DevOps Junior", empresa: "SENA", año: 2025, descripcion: "Automatización de despliegues y monitoreo de servicios en la nube." }
  ];

  return (
    <div>
      {experiencias.map((exp, index) => (
        <div key={index}>
          <h3>{exp.cargo}</h3>
          <p><strong>Empresa:</strong> {exp.empresa}</p>
          <p><strong>Año:</strong> {exp.año}</p>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default Experiencia;
