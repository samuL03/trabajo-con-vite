import React from "react";

function StackTecnologias({ tecnologias }) {
  const getColor = (tec) => {
    if (tec === "React") return "#61DBFB";
    if (tec === "Node.js") return "#68A063";
    if (tec === "JavaScript") return "#F7DF1E";
    if (tec === "HTML") return "#E44D26";
    if (tec === "CSS") return "#2965F1";
    if (tec === "Git") return "#F34F29";
    if (tec === "GitHub") return "#333";
    if (tec === "Vite") return "#646CFF";
    return "#ccc";
  };

  return (
    <div style={{ marginTop: "15px" }}>
      {tecnologias.map((tec, index) => (
        <span
          key={index}
          style={{
            backgroundColor: getColor(tec),
            color: tec === "JavaScript" ? "black" : "white",
            padding: "8px 12px",
            margin: "6px",
            borderRadius: "15px",
            display: "inline-block",
            fontWeight: "bold",
          }}
        >
          {tec}
        </span>
      ))}
    </div>
  );
}

export default StackTecnologias;