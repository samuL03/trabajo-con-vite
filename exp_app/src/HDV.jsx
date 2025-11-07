import CabeceraCV from "./cabeceraCV";
import Perfil from "./Perfil";
import Experiencia from "./Experiencia";
import Educacion from "./educacion";

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
