import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Servicios } from "../components/Servicios";
import { ComoTrabajamos } from "../components/ComoTrabajamos";
import { Footer } from "../components/Footer";
import { SolicitudPresupuestoForm } from "../components/forms/SolicitudPresupuestoForm";

export const Home = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <ComoTrabajamos />

      {/* 🔥 SOBRE NOSOTROS + FORMULARIO */}
      <section
        id="formulario"
        style={{
          backgroundColor: "#e6ded2", // ✅ MISMO BEIGE QUE ARRIBA
          padding: "50px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // 🔥 IGUALES
            gap: "40px",
            alignItems: "center", // 🔥 CLAVE REAL
          }}
        >
          {/* IZQUIERDA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: "460px", // 🔥 limita ancho → mismo peso visual
            }}
          >
            <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>
              Sobre nosotros
            </h2>

            <p style={{ fontSize: "14px", lineHeight: "1.5", marginBottom: "8px" }}>
              En LevelUp Interiores estamos especializados en la reforma de baños y
              cocinas, trabajando cada proyecto con un enfoque profesional,
              organizado y orientado al detalle.
            </p>

            <p style={{ fontSize: "14px", lineHeight: "1.5", marginBottom: "8px" }}>
              Coordinamos todas las fases de la reforma para garantizar una
              ejecución limpia, eficiente y sin complicaciones.
            </p>

            <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
              Nuestro objetivo es ofrecer resultados duraderos, con materiales de
              calidad y una ejecución que aporte valor real a cada espacio.
            </p>
          </div>

          {/* DERECHA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: "460px", // 🔥 MISMO ancho que izquierda
              margin: "0 auto", // 🔥 centra bloque
            }}
          >
            <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>
              Solicita tu presupuesto
            </h2>

            <p style={{ fontSize: "14px", color: "#555", marginBottom: "14px" }}>
              Cuéntanos tu proyecto y te respondemos en menos de 24h
            </p>

            <SolicitudPresupuestoForm
              onSuccess={(data) => {
                console.log("Lead creado:", data);
              }}
            />
          </div>
        </div>
      </section>

      <Footer />

      {/* WHATSAPP */}
      <a
        href="https://wa.me/34606899991"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "#fff",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          textDecoration: "none",
          boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
          zIndex: 1000,
        }}
      >
        💬
      </a>

      {/* BOTÓN SUBIR */}
      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            backgroundColor: "#000",
            color: "#fff",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
            zIndex: 1000,
          }}
        >
          {React.createElement(FaArrowUp as any)}
        </button>
      )}
    </>
  );
};