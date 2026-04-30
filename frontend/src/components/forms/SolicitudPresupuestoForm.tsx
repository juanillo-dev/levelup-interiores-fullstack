import { useState } from "react";
import axios from "axios";
import { SolicitudPresupuesto } from "../../interfaces/SolicitudPresupuesto";

interface Props {
  onSuccess: (data: SolicitudPresupuesto) => void;
}

const API_URL = "http://localhost:8080/solicitudesPresupuesto";

export const SolicitudPresupuestoForm = ({ onSuccess }: Props) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validate = () => {
    if (!nombre.trim()) return "El nombre es obligatorio";
    if (!telefono.match(/^[0-9]{9}$/)) return "Teléfono inválido (9 dígitos)";
    if (descripcion.length < 10) return "Describe mejor el trabajo";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    const payload = {
      nombre,
      telefono,
      descripcion,
      fechaSolicitud: new Date().toISOString(),
      estado: "PENDIENTE",
      empresaId: 1,
    };

    try {
      const response = await axios.post(API_URL, payload);

      setSuccess(true);
      onSuccess(response.data as SolicitudPresupuesto);

      setNombre("");
      setTelefono("");
      setDescripcion("");
    } catch (err) {
      setError("Error al enviar. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    padding: "9px 14px",
    borderRadius: "8px",
    border: "1px solid #d8cfc4",
    outline: "none",
    fontSize: "14px",
    width: "100%",
    backgroundColor: "#fff",
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "100%", // 🔥 CLAVE → ocupa todo el ancho disponible
        display: "flex",
        flexDirection: "column",
        gap: "8px", // 🔥 más compacto
      }}
    >
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={inputStyle}
      />

      <input
        type="tel"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        style={inputStyle}
      />

      <textarea
        placeholder="Cuéntanos tu proyecto (baño, cocina o reforma integral)"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        rows={3}
        style={{
          ...inputStyle,
          resize: "none",
        }}
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          backgroundColor: "#d6c3a3",
          color: "#000",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          fontWeight: 500,
          cursor: "pointer",
          transition: "all 0.2s ease",
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? "Enviando..." : "Solicitar presupuesto"}
      </button>

      {error && (
        <p style={{ color: "#d9534f", fontSize: "12px" }}>
          {error}
        </p>
      )}

      {success && (
        <p style={{ color: "#3c763d", fontSize: "12px" }}>
          Solicitud enviada. Te contactamos en menos de 24h.
        </p>
      )}
    </form>
  );
};