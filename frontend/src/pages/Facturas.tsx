import { useEffect, useState } from "react";
import { Factura } from "../interfaces/Factura";
import { getFacturas, deleteFactura } from "../services/api";
import { FacturaForm } from "../components/FacturaForm";

export const FacturasPage = () => {
  const [facturas, setFacturas] = useState<Factura[]>([]);
  const [editing, setEditing] = useState<Factura | null>(null);

  const fetchData = async () => setFacturas(await getFacturas());

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar esta factura?")) return;
    try { await deleteFactura(id); fetchData(); }
    catch (error) { console.error(error); }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Facturas</h1>
      <div className="mb-6">
        <FacturaForm factura={editing || undefined} onSuccess={() => { setEditing(null); fetchData(); }} />
      </div>
      <table className="min-w-full border border-gray-700">
        <thead className="bg-gray-800 text-left">
          <tr>
            <th className="px-4 py-2 border-b border-gray-700">Cliente</th>
            <th className="px-4 py-2 border-b border-gray-700">Total</th>
            <th className="px-4 py-2 border-b border-gray-700">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map(f => (
            <tr key={f.id} className="hover:bg-gray-700">
              <td className="px-4 py-2">{f.id}</td>
              <td className="px-4 py-2">{f.fecha}</td>
              <td className="px-4 py-2">{f.total}€</td>
              <td className="px-4 py-2">{f.clienteId}</td>
              <td className="px-4 py-2">{f.empresaId}</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-yellow-500 px-2 py-1 rounded" onClick={() => setEditing(f)}>Editar</button>
                <button className="bg-red-600 px-2 py-1 rounded" onClick={() => handleDelete(f.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};