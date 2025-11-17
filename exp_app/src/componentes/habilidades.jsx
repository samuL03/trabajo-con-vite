export default function Habilidades() {
  const habilidades = [
    "Trabajo en equipo",
    "Comunicación efectiva",
    "Resolución de problemas",
    "Pensamiento crítico",
    "Aprendizaje rápido",
    "Responsabilidad"
  ];

  return (
    <div>
      <h2>Habilidades</h2>
      <ul>
        {habilidades.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
    </div>
  );
}
