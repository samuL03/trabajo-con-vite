import { cvData } from "./CvData";
import Perfil from "./components/Perfil";
import Habilidades from "./components/Habilidades";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";


function HDV() {
  return (
    <div style={{ width: "70%", margin: "auto", fontFamily: "Arial" }}>
      <Perfil nombre={cvData.nombre} titulo={cvData.titulo} perfil={cvData.perfil} />

      <Habilidades habilidades={cvData.habilidades} />

      <Experiencia experiencia={cvData.experiencia} />

      <Educacion educacion={cvData.educacion} />
      
    </div>
  );
}

export default HDV;
