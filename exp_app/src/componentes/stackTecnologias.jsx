function StackTecnologias() {
  const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "GitHub", "Figma", "Tailwind", "MongoDB"];

  return (
    <div>
      <h2>Stack de Tecnologías</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {tecnologias.map((tech, index) => {
          let color = "";

          if (tech === "React") color = "lightblue";
          else if (tech === "Node.js") color = "lightgreen";
          else if (tech === "JavaScript") color = "yellow";
          else if (tech === "MongoDB") color = "lightseagreen";
          else if (tech === "GitHub") color = "lightgray";
          else color = "lightcoral";

          return (
            <span
              key={index}
              style={{
                backgroundColor: color,
                padding: "6px 12px",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
            >
              {tech}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default StackTecnologias;
