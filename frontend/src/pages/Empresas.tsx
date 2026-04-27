import { useEffect, useState } from "react";
import { Empresa } from "../interfaces/Empresa";
import { getEmpresas, deleteEmpresa } from "../services/api";
import { EmpresaForm } from "../components/EmpresaForm";

export const EmpresasPage = () => {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [editing, setEditing] = useState<Empresa | null>(null);

  const fetchData = async () => setEmpresas(await getEmpresas());

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar esta empresa?")) return;
    try { await deleteEmpresa(id); fetchData(); }
    catch (error) { console.error(error); }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Empresas</h1>
      <div className="mb-6">
        <EmpresaForm empresa={editing || undefined} onSuccess={() => { setEditing(null); fetchData(); }} />
      </div>
      <table className="min-w-full border border-gray-700">
        <thead className="bg-gray-800 text-left">
          <tr>
            <th className="px-4 py-2 border-b border-gray-700">Nombre</th>
            <th className="px-4 py-2 border-b border-gray-700">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map(e => (
            <tr key={e.id} className="hover:bg-gray-700">
              <td className="px-4 py-2">{e.nombre}</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-yellow-500 px-2 py-1 rounded" onClick={() => setEditing(e)}>Editar</button>
                <button className="bg-red-600 px-2 py-1 rounded" onClick={() => handleDelete(e.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};