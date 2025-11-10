import CabeceraCV from "./componentes/cabeceraCV";
import Perfil from "./componentes/perfil";
import Experiencia from "./componentes/experiencia";
import Educacion from "./componentes/educacion";
import StackTecnologias from "./componentes/stackTecnologias";

function hoja() {
  return (
    <div>
      <CabeceraCV />
      <Perfil />
      <Experiencia />
      <Educacion />
      <StackTecnologias />
    </div>
  );
}

export default hoja;
