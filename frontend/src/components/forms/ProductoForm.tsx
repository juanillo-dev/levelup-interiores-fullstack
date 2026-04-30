import { useState } from "react";
import { Producto } from "../../interfaces/Producto";
import axios from "axios";

interface ProductoFormProps {
  producto?: Producto;          // Si viene, es edición
  onSuccess: () => void;        // Callback después de crear/editar
}

const API_URL = "http://localhost:8080/productos";

export const ProductoForm = ({ producto, onSuccess }: ProductoFormProps) => {
  const [nombre, setNombre] = useState(producto?.nombre || "");
  const [descripcion, setDescripcion] = useState(producto?.descripcion || "");
  const [precio, setPrecio] = useState(producto?.precio || 0);
  const [empresaId, setEmpresaId] = useState(producto?.empresaId || 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { nombre, descripcion, precio, empresaId };

    try {
      if (producto) {
        // Editar
        await axios.put(`${API_URL}/${producto.id}`, payload);
      } else {
        // Crear
        await axios.post(API_URL, payload);
      }
      onSuccess();
    } catch (error) {
      console.error("Error guardando producto:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
        required
      />
      <input
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Descripción"
        required
      />
      <input
        type="number"
        value={precio}
        onChange={(e) => setPrecio(parseFloat(e.target.value))}
        placeholder="Precio"
        required
      />
      <input
        type="number"
        value={empresaId}
        onChange={(e) => setEmpresaId(parseInt(e.target.value))}
        placeholder="Empresa ID"
        required
      />
      <button type="submit">{producto ? "Actualizar" : "Crear"} Producto</button>
    </form>
  );
};