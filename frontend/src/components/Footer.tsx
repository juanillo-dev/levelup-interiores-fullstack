import React from "react";
import logo from "../assets/logolevelupinteriores.jpg";

export const Footer = () => {
  const textLine = {
    fontSize: "14px",
    margin: "4px 0",
  };

  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "30px 20px 15px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* CONTACTO */}
        <div>
          <h3 style={{ marginBottom: "10px", fontSize: "16px" }}>
            Contacto
          </h3>

          <p style={textLine}>
            📍 C/ Rey Gaspar Nº9, Campanillas, Málaga, 29590
          </p>

          <p style={textLine}>
            📩 Email: design@levelupinteriores.es
          </p>

          {/* 🔥 CAMBIO AQUÍ */}
          <p style={textLine}>
            <a
              href="https://www.linkedin.com/company/levelup-interiores"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              💼 Síguenos en LinkedIn
            </a>
          </p>

          <p style={textLine}>
            <a
              href="https://wa.me/34606899991"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              💬 WhatsApp 606 · 899 · 991
            </a>
          </p>
        </div>

        {/* HORARIOS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "6px",
          }}
        >
          <h3 style={{ marginBottom: "6px", fontSize: "16px" }}>
            Horarios
          </h3>

          <div style={{ display: "flex", gap: "40px" }}>
            <div>
              <p style={{ ...textLine, fontWeight: 600 }}>
                Trabajo
              </p>
              <p style={{ ...textLine, margin: 0 }}>
                07:00 – 15:00
              </p>
            </div>

            <div>
              <p style={{ ...textLine, fontWeight: 600 }}>
                Online
              </p>
              <p style={{ ...textLine, margin: 0 }}>
                07:00 – 22:00
              </p>
              <p style={{ fontSize: "13px", margin: 0, color: "#aaa" }}>
                Ininterrumpido
              </p>
            </div>
          </div>
        </div>

        {/* VACÍO */}
        <div></div>
      </div>

      {/* FRANJA FINAL */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "20px auto 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #222",
          paddingTop: "10px",
        }}
      >
        <img
          src={logo}
          alt="LevelUp Interiores"
          style={{ height: "28px", opacity: 0.9 }}
        />

        <p style={{ fontSize: "12px", color: "#777" }}>
          © 2025 LevelUp Interiores
        </p>
      </div>
    </footer>
  );
};