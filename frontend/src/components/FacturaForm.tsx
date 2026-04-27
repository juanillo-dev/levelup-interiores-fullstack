import { useState } from "react";
import { Factura } from "../interfaces/Factura";
import axios from "axios";

interface FacturaFormProps {
  factura?: Factura;
  onSuccess: () => void;
}

const API_URL = "http://localhost:8080/facturas";

export const FacturaForm = ({ factura, onSuccess }: FacturaFormProps) => {
  const [fecha, setFecha] = useState(factura?.fecha || "");
  const [total, setTotal] = useState(factura?.total || 0);
  const [clienteId, setClienteId] = useState(factura?.clienteId || 1);
  const [empresaId, setEmpresaId] = useState(factura?.empresaId || 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { fecha, total, clienteId, empresaId };
    try {
      if (factura) {
        await axios.put(`${API_URL}/${factura.id}`, payload);
      } else {
        await axios.post(API_URL, payload);
      }
      onSuccess();
    } catch (error) {
      console.error("Error guardando factura:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
      <input type="number" value={total} onChange={(e) => setTotal(parseFloat(e.target.value))} required />
      <input type="number" value={clienteId} onChange={(e) => setClienteId(parseInt(e.target.value))} required />
      <input type="number" value={empresaId} onChange={(e) => setEmpresaId(parseInt(e.target.value))} required />
      <button type="submit">{factura ? "Actualizar" : "Crear"} Factura</button>
    </form>
  );
};