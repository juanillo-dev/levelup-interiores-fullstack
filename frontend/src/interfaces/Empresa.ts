<tbody>
  {empresas.map(e => (
    <tr key={e.id} className="hover:bg-gray-700">
      <td className="px-4 py-2">{e.nombre}</td>
      <td className="px-4 py-2">{e.direccion}</td>
      <td className="px-4 py-2 space-x-2">
        <button className="bg-yellow-500 px-2 py-1 rounded" onClick={() => setEditing(e)}>Editar</button>
        <button className="bg-red-600 px-2 py-1 rounded" onClick={() => handleDelete(e.id)}>Eliminar</button>
      </td>
    </tr>
  ))}
</tbody>