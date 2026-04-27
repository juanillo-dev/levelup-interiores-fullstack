import { useEffect, useState } from "react";
import { Producto } from "../interfaces/Producto";
import { getProductos, deleteProducto } from "../services/api";
import { ProductoForm } from "../components/ProductoForm";

export const ProductosPage = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [editing, setEditing] = useState<Producto | null>(null);

  const fetchData = async () => {
    const data = await getProductos();
    setProductos(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar este producto?")) return;
    try {
      await deleteProducto(id);
      fetchData();
    } catch (error) {
      console.error("Error eliminando producto:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>

      {/* Formulario Crear/Editar */}
      <div className="mb-6">
        <ProductoForm
          producto={editing || undefined}
          onSuccess={() => {
            setEditing(null);
            fetchData();
          }}
        />
      </div>

      {/* Tabla de productos */}
      <table className="min-w-full border border-gray-700">
        <thead>
          <tr className="bg-gray-800 text-left">
            <th className="px-4 py-2 border-b border-gray-700">Nombre</th>
            <th className="px-4 py-2 border-b border-gray-700">Precio</th>
            <th className="px-4 py-2 border-b border-gray-700">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id} className="hover:bg-gray-700">
              <td className="px-4 py-2">{p.nombre}</td>
              <td className="px-4 py-2">{p.precio}€</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  className="bg-yellow-500 px-2 py-1 rounded"
                  onClick={() => setEditing(p)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-600 px-2 py-1 rounded"
                  onClick={() => handleDelete(p.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};