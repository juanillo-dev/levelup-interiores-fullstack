import { useState } from "react";
import { SolicitudPresupuesto } from "../interfaces/SolicitudPresupuesto";
import axios from "axios";

interface SolicitudPresupuestoFormProps {
  solicitud?: SolicitudPresupuesto;
  onSuccess: () => void;
}

const API_URL = "http://localhost:8080/solicitudesPresupuesto";

export const SolicitudPresupuestoForm = ({ solicitud, onSuccess }: SolicitudPresupuestoFormProps) => {
  const [fechaSolicitud, setFechaSolicitud] = useState(solicitud?.fechaSolicitud || "");
  const [estado, setEstado] = useState(solicitud?.estado || "");
  const [descripcion, setDescripcion] = useState(solicitud?.descripcion || "");
  const [empresaId, setEmpresaId] = useState(solicitud?.empresaId || 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { fechaSolicitud, estado, descripcion, empresaId };
    try {
      if (solicitud) {
        await axios.put(`${API_URL}/${solicitud.id}`, payload);
      } else {
        await axios.post(API_URL, payload);
      }
      onSuccess();
    } catch (error) {
      console.error("Error guardando solicitud:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={fechaSolicitud} onChange={(e) => setFechaSolicitud(e.target.value)} required />
      <input value={estado} onChange={(e) => setEstado(e.target.value)} placeholder="Estado" required />
      <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" required />
      <input type="number" value={empresaId} onChange={(e) => setEmpresaId(parseInt(e.target.value))} required />
      <button type="submit">{solicitud ? "Actualizar" : "Crear"} Solicitud</button>
    </form>
  );
};