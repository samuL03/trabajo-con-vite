import { useState } from "react";

export default function FormularioTecnologia({ agregarTecnologia }) {
  const [nuevaTec, setNuevaTec] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault(); // evita recarga
    if (nuevaTec.trim() === "") return;

    agregarTecnologia(nuevaTec);
    setNuevaTec("");
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        value={nuevaTec}
        onChange={(e) => setNuevaTec(e.target.value)}
        placeholder="Agregar tecnología..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
