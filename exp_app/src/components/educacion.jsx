function Educacion({ educacion }) {
  return (
    <section>
      <h2>Educación</h2>
      {educacion.map((edu, i) => (
        <div key={i}>
          <h3>{edu.titulo}</h3>
          <p>{edu.institucion}</p>
          <p>{edu.fecha}</p>
        </div>
      ))}
      <hr />
    </section>
  );
}

export default Educacion;
