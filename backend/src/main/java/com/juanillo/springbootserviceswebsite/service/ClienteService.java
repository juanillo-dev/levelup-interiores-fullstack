package com.juanillo.springbootserviceswebsite.service;

import com.juanillo.springbootserviceswebsite.entity.Cliente;
import com.juanillo.springbootserviceswebsite.dto.ClienteDTO;
import java.util.List;

public interface ClienteService {
    List<Cliente> obtenerTodos();
    Cliente obtenerPorId(Long id);
    Cliente crearCliente(ClienteDTO clienteDTO);
    Cliente actualizarCliente(Long id, ClienteDTO clienteDTO);
    boolean eliminarCliente(Long id);
}