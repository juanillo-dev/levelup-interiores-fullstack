<tbody>
  {productos.map(p => (
    <tr key={p.id} className="hover:bg-gray-700">
      <td className="px-4 py-2">{p.nombre}</td>
      <td className="px-4 py-2">{p.descripcion}</td>
      <td className="px-4 py-2">{p.precio}€</td>
      <td className="px-4 py-2">{p.empresaId}</td>
      <td className="px-4 py-2 space-x-2">
        <button className="bg-yellow-500 px-2 py-1 rounded" onClick={() => setEditing(p)}>Editar</button>
        <button className="bg-red-600 px-2 py-1 rounded" onClick={() => handleDelete(p.id)}>Eliminar</button>
      </td>
    </tr>
  ))}
</tbody>