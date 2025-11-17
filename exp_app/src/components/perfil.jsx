function Perfil({ nombre, titulo, perfil }) {
  return (
    <section>
      <h1>{nombre}</h1>
      <h3>{titulo}</h3>
      <p>{perfil}</p>
      <hr />
    </section>
  );
}

export default Perfil;
