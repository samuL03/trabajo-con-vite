import CabeceraCV from "./componentes/cabeceraCV";
import Perfil from "./componentes/perfil";
import Experiencia from "./componentes/experiencia";
import Educacion from "./componentes/educacion";

function hoja() {
  return (
    <div>
      <CabeceraCV />
      <Perfil />
      <Experiencia />
      <Educacion />
    </div>
  );
}

export default hoja;
