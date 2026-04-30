export const Confianza = () => {
  return (
    <>
      {/* SOBRE NOSOTROS */}
      <section
        id="nosotros"
        style={{
          backgroundColor: "#f5f1eb",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "30px", marginBottom: "16px" }}>
            Sobre nosotros
          </h2>

          <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "12px" }}>
            En LevelUp Interiores estamos especializados en la reforma de baños y cocinas,
            trabajando cada proyecto con un enfoque práctico, organizado y orientado al detalle.
          </p>

          <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "12px" }}>
            Coordinamos todas las fases de la reforma para garantizar una ejecución limpia,
            eficiente y sin complicaciones, cuidando tanto la funcionalidad como el acabado final.
          </p>

          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            Nuestro objetivo es ofrecer resultados duraderos, con materiales de calidad y una
            ejecución profesional que aporte valor real a cada espacio.
          </p>
        </div>
      </section>

      {/* BLOQUE NEGRO (CTA) */}
      <section
        style={{
          backgroundColor: "#000", // 🔥 negro puro
          color: "#fff",
          padding: "40px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h2 style={{ marginBottom: "6px", fontSize: "22px" }}>
            ¿Tienes un proyecto en mente?
          </h2>
          <p style={{ margin: 0, fontSize: "14px", color: "#ccc" }}>
            Cuéntanos y te orientamos sin compromiso.
          </p>
        </div>

        <button
          style={{
            backgroundColor: "#d6c3a3", // 🔥 color marca
            color: "#000",
            padding: "10px 18px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          Hablar por WhatsApp
        </button>
      </section>

      {/* CONTACTO */}
      <section
        style={{
          backgroundColor: "#f5f1eb",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "12px", fontSize: "24px" }}>
          Contacto
        </h2>

        <p style={{ marginBottom: "6px" }}>LevelUp Interiores</p>
        <p style={{ marginBottom: "6px" }}>C/ Rey Gaspar Nº9, Campanillas · Málaga</p>
        <p style={{ marginBottom: "6px" }}>📞 606 89 99 91</p>
        <p style={{ marginBottom: "6px" }}>✉️ design@levelupinteriores.es</p>
        <p style={{ fontSize: "13px", color: "#666" }}>L–V: 8:00 – 18:00</p>
      </section>
    </>
  );
};