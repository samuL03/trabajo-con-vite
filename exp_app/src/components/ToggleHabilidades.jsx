import { useState } from "react";
import Habilidades from "./Habilidades";

export default function ToggleHabilidades() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

      {mostrar && <Habilidades />}
    </div>
  );
}
