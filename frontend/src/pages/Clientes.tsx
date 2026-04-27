import { useEffect, useState } from "react";
import { Cliente } from "../interfaces/Cliente";
import { getClientes, deleteCliente } from "../services/api";
import { ClienteForm } from "../components/ClienteForm";

export const ClientesPage = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [editing, setEditing] = useState<Cliente | null>(null);

  const fetchData = async () => setClientes(await getClientes());

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar este cliente?")) return;
    try { await deleteCliente(id); fetchData(); }
    catch (error) { console.error(error); }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Clientes</h1>
      <div className="mb-6">
        <ClienteForm
          cliente={editing || undefined}
          onSuccess={() => { setEditing(null); fetchData(); }}
        />
      </div>
      <table className="min-w-full border border-gray-700">
        <thead className="bg-gray-800 text-left">
          <tr>
            <th className="px-4 py-2 border-b border-gray-700">Nombre</th>
            <th className="px-4 py-2 border-b border-gray-700">Email</th>
            <th className="px-4 py-2 border-b border-gray-700">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(c => (
            <tr key={c.id} className="hover:bg-gray-700">
              <td className="px-4 py-2">{c.nombre}</td>
              <td className="px-4 py-2">{c.email}</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-yellow-500 px-2 py-1 rounded" onClick={() => setEditing(c)}>Editar</button>
                <button className="bg-red-600 px-2 py-1 rounded" onClick={() => handleDelete(c.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};