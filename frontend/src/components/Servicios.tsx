import React from "react";

export const Servicios = () => {
  return (
    <section
      id="servicios"
      style={{ backgroundColor: "#ffffff", padding: "50px 20px" }}
    >
      <div
        style={{
          width: "100%",
          padding: "0 60px",
          display: "grid",
          gridTemplateColumns: "1fr 1px 1.5fr",
          gap: "30px",
          alignItems: "center",
        }}
      >
        {/* IZQUIERDA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "16px",
            }}
          >
            Servicios
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.6",
              maxWidth: "360px",
              fontSize: "15px",
            }}
          >
            Soluciones completas para la renovación de tu hogar, cuidando cada
            detalle para garantizar calidad y un acabado profesional.
          </p>
        </div>

        {/* LÍNEA */}
        <div
          style={{
            width: "1px",
            backgroundColor: "#ddd",
            height: "100%",
          }}
        />

        {/* DERECHA */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            fontSize: "15px",
            lineHeight: "1.9",
          }}
        >
          <div>
            <p>Rehabilitación de baños</p>
            <p>Rehabilitación de cocinas</p>
            <p>Reformas integrales</p>
          </div>

          <div>
            <p>Instalaciones de agua y saneamiento</p>
            <p>Instalaciones eléctricas</p>
            <p>Revestimientos cerámicos</p>
          </div>
        </div>
      </div>
    </section>
  );
};