export default function StackTecnologias({ tecnologias }) {
  return (
    <div>
      <h2>Stack Tecnológico</h2>
      <ul>
        {tecnologias.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
