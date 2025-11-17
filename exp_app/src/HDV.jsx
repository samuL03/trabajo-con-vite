import { useState } from "react";
import { datosCV } from "./cvData";
import CabeceraCV from "./components/CabeceraCV";
import StackTecnologias from "./components/StackTecnologias";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

export default function App() {
  const [tecnologias, setTecnologias] = useState(datosCV.tecnologiasIniciales);

  // función para el formulario
  const agregarTecnologia = (tec) => {
    setTecnologias((prev) => [...prev, tec]); // inmutable
  };

  return (
    <div>
      <CabeceraCV nombre={datosCV.nombre} perfil={datosCV.perfil} />

      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />

      <StackTecnologias tecnologias={tecnologias} />

      <ToggleHabilidades />
    </div>
  );
}
