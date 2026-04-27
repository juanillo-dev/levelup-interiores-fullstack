package com.juanillo.gestiondeempresa.service;

import com.juanillo.gestiondeempresa.entity.Cliente;
import com.juanillo.gestiondeempresa.dto.ClienteDTO;
import java.util.List;

public interface ClienteService {
    List<Cliente> obtenerTodos();
    Cliente obtenerPorId(Long id);
    Cliente crearCliente(ClienteDTO clienteDTO);
    Cliente actualizarCliente(Long id, ClienteDTO clienteDTO);
    boolean eliminarCliente(Long id);
}