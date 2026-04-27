<tbody>
  {clientes.map(c => (
    <tr key={c.id} className="hover:bg-gray-700">
      <td className="px-4 py-2">{c.nombre}</td>
      <td className="px-4 py-2">{c.telefono}</td>
      <td className="px-4 py-2">{c.direccion}</td>
      <td className="px-4 py-2">{c.email}</td>
      <td className="px-4 py-2">{c.empresaId}</td>
      <td className="px-4 py-2 space-x-2">
        <button className="bg-yellow-500 px-2 py-1 rounded" onClick={() => setEditing(c)}>Editar</button>
        <button className="bg-red-600 px-2 py-1 rounded" onClick={() => handleDelete(c.id)}>Eliminar</button>
      </td>
    </tr>
  ))}
</tbody>