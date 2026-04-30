import React from "react";
import heroImg from "../assets/hero.jpg";

export const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        height: "65vh",
        minHeight: "420px",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.35)",
        }}
      />

      {/* CONTENIDO */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 20px",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "500px", color: "#fff" }}>
            <h1
              style={{
                fontSize: "36px",
                marginBottom: "16px",
                lineHeight: "1.2",
              }}
            >
              Rehabilitación de baños y cocinas en Málaga
            </h1>

            <p
              style={{
                fontSize: "16px",
                marginBottom: "24px",
                color: "#ddd",
              }}
            >
              Reformas completas con acabados de calidad y ejecución profesional
            </p>

            <a
              href="#formulario"
              style={{
                display: "inline-block",
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 20px",
                textDecoration: "none",
                borderRadius: "30px",
                fontWeight: 500,
                fontSize: "13px",
              }}
            >
              Solicitar presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};