export const ComoTrabajamos = () => {
  const pasos = [
    "Visita inicial y valoración del trabajo",
    "Presupuesto detallado",
    "Planificación de la reforma",
    "Ejecución organizada por fases",
    "Seguimiento y control",
    "Entrega final",
  ];

  const titleStyle = {
    fontSize: "22px",
    fontWeight: 600,
    marginBottom: "6px",
    height: "28px",
    display: "flex",
    alignItems: "center",
  };

  const textStyle = {
    fontSize: "14px",
    lineHeight: "1.4", // 🔥 un poco más limpio visualmente
    margin: 0,
    color: "#333",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px", // 🔥 mejor separación (antes muy aplastado)
  };

  return (
    <section
      id="metodo"
      style={{
        backgroundColor: "#f5f1eb", // 🔥 BEIGE CLARO UNIFICADO
        padding: "30px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px", // 🔥 un poco más ancho → respira mejor
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* PROCESO */}
        <div>
          <h2 style={titleStyle}>Nuestro proceso</h2>
          <div style={columnStyle}>
            {pasos.map((texto, i) => (
              <p key={i} style={textStyle}>{texto}</p>
            ))}
          </div>
        </div>

        {/* MATERIALES */}
        <div>
          <h2 style={titleStyle}>Materiales y acabados</h2>
          <div style={columnStyle}>
            <p style={textStyle}>Materiales de alta calidad</p>
            <p style={textStyle}>Soluciones duraderas</p>
            <p style={textStyle}>Instalación funcional y precisa</p>
            <p style={textStyle}>Optimización del espacio</p>
            <p style={textStyle}>Mejora de seguridad y eficiencia</p>
            <p style={textStyle}>Acabados con criterio profesional</p>
          </div>
        </div>

        {/* EQUIPAMIENTO */}
        <div>
          <h2 style={titleStyle}>Equipamiento de diseño</h2>
          <div style={columnStyle}>
            <p style={textStyle}>Grifería — <strong>Llavisan</strong></p>
            <p style={textStyle}>Mamparas — <strong>Llavisan</strong></p>
            <p style={textStyle}>Muebles y encimeras</p>
            <p style={textStyle}>Platos de ducha</p>
            <p style={{ ...textStyle, fontSize: "13px", color: "#666" }}>
              Opciones personalizadas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};