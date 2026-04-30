import { useState } from "react";
import { SolicitudPresupuesto } from "../interfaces/SolicitudPresupuesto";
import { SolicitudPresupuestoForm } from "../components/forms/SolicitudPresupuestoForm";

export const SolicitudesPresupuestoPage = () => {
  const [solicitudes, setSolicitudes] = useState<SolicitudPresupuesto[]>([]);

  const handleDelete = (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar esta solicitud?")) return;
    setSolicitudes(solicitudes.filter(s => s.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Solicitudes de Presupuesto
      </h1>

      <div className="mb-6">
        <SolicitudPresupuestoForm
          onSuccess={(newSolicitud) => {
            setSolicitudes([
              ...solicitudes,
              { ...newSolicitud, id: Date.now() }
            ]);
          }}
        />
      </div>

      <table className="min-w-full border border-gray-700">
        <thead className="bg-gray-800 text-left">
          <tr>
            <th className="px-4 py-2 border-b border-gray-700">Fecha</th>
            <th className="px-4 py-2 border-b border-gray-700">Estado</th>
            <th className="px-4 py-2 border-b border-gray-700">Descripción</th>
            <th className="px-4 py-2 border-b border-gray-700">Empresa</th>
            <th className="px-4 py-2 border-b border-gray-700">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {solicitudes.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-4">
                No hay solicitudes aún
              </td>
            </tr>
          ) : (
            solicitudes.map((s) => (
              <tr key={s.id} className="hover:bg-gray-700">
                <td className="px-4 py-2">{s.fechaSolicitud}</td>
                <td className="px-4 py-2">{s.estado}</td>
                <td className="px-4 py-2">{s.descripcion}</td>
                <td className="px-4 py-2">{s.empresaId}</td>

                <td className="px-4 py-2 space-x-2">
                  <button
                    className="bg-yellow-500 px-2 py-1 rounded"
                  >
                    Editar
                  </button>

                  <button
                    className="bg-red-600 px-2 py-1 rounded"
                    onClick={() => handleDelete(s.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};