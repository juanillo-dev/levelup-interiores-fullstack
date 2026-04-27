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