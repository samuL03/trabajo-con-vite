function Habilidades({ habilidades }) {
  return (
    <section>
      <h2>Habilidades</h2>
      <ul>
        {habilidades.map((hab, i) => (
          <li key={i}>{hab}</li>
        ))}
      </ul>
      <hr />
    </section>
  );
}

export default Habilidades;
