import { useState } from "react";
import { Cliente } from "../../interfaces/Cliente";
import axios from "axios";

interface ClienteFormProps {
  cliente?: Cliente;
  onSuccess: () => void;
}

const API_URL = "http://localhost:8080/clientes";

export const ClienteForm = ({ cliente, onSuccess }: ClienteFormProps) => {
  const [nombre, setNombre] = useState(cliente?.nombre || "");
  const [telefono, setTelefono] = useState(cliente?.telefono || "");
  const [direccion, setDireccion] = useState(cliente?.direccion || "");
  const [email, setEmail] = useState(cliente?.email || "");
  const [empresaId, setEmpresaId] = useState(cliente?.empresaId || 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { nombre, telefono, direccion, email, empresaId };
    try {
      if (cliente) {
        await axios.put(`${API_URL}/${cliente.id}`, payload);
      } else {
        await axios.post(API_URL, payload);
      }
      onSuccess();
    } catch (error) {
      console.error("Error guardando cliente:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
      <input value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Teléfono" required />
      <input value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Dirección" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="number" value={empresaId} onChange={(e) => setEmpresaId(parseInt(e.target.value))} required />
      <button type="submit">{cliente ? "Actualizar" : "Crear"} Cliente</button>
    </form>
  );
};