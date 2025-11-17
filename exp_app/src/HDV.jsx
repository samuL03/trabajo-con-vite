import Cabecera from "./componentes/cabeceraCV";
import Perfil from "./componentes/perfil";
import Experiencia from "./componentes/experiencia";
import Educacion from "./componentes/educacion";
import {data} from "./componentes/data";
import StackTecnologias from "./componentes/stackTecnologias";

export default function hoja() {
  return (
    <div className="container">
      <Cabecera
      nombre={data.nombre}
      cargo={data.cargo}
      ciudad={data.ciudad}
      contacto={data.contacto}
      />

      <Perfil resumen={data.perfil} />

      <h2>Experiencia</h2>
      <Experiencia experiencia={data.experiencia} />

      <h2>Educación</h2>
      <Educacion estudios={data.educacion} />

      <h2>Tecnologías</h2>
      <StackTecnologias tecnologias={data.tecnologias} />
    </div>
  );
}

