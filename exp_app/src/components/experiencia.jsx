function Experiencia({ experiencia }) {
  return (
    <section>
      <h2>Experiencia</h2>
      {experiencia.map((exp, i) => (
        <div key={i}>
          <h3>{exp.cargo} - {exp.empresa}</h3>
          <p>{exp.fecha}</p>
          <p>{exp.descripcion}</p>
        </div>
      ))}
      <hr />
    </section>
  );
}

export default Experiencia;
