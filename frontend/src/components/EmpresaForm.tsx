import { useState } from "react";
import { Empresa } from "../interfaces/Empresa";
import axios from "axios";

interface EmpresaFormProps {
  empresa?: Empresa;
  onSuccess: () => void;
}

const API_URL = "http://localhost:8080/empresas";

export const EmpresaForm = ({ empresa, onSuccess }: EmpresaFormProps) => {
  const [nombre, setNombre] = useState(empresa?.nombre || "");
  const [direccion, setDireccion] = useState(empresa?.direccion || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { nombre, direccion };
    try {
      if (empresa) {
        await axios.put(`${API_URL}/${empresa.id}`, payload);
      } else {
        await axios.post(API_URL, payload);
      }
      onSuccess();
    } catch (error) {
      console.error("Error guardando empresa:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
      <input value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Dirección" required />
      <button type="submit">{empresa ? "Actualizar" : "Crear"} Empresa</button>
    </form>
  );
};