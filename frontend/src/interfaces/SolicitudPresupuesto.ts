<tbody>
  {solicitudes.map(s => (
    <tr key={s.id} className="hover:bg-gray-700">
      <td className="px-4 py-2">{s.fechaSolicitud}</td>
      <td className="px-4 py-2">{s.estado}</td>
      <td className="px-4 py-2">{s.descripcion}</td>
      <td className="px-4 py-2">{s.empresaId}</td>
      <td className="px-4 py-2 space-x-2">
        <button className="bg-yellow-500 px-2 py-1 rounded" onClick={() => setEditing(s)}>Editar</button>
        <button className="bg-red-600 px-2 py-1 rounded" onClick={() => handleDelete(s.id)}>Eliminar</button>
      </td>
    </tr>
  ))}
</tbody>