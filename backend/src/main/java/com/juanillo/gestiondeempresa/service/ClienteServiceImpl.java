package com.juanillo.gestiondeempresa.service;

import com.juanillo.gestiondeempresa.entity.Cliente;
import com.juanillo.gestiondeempresa.dto.ClienteDTO;
import com.juanillo.gestiondeempresa.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public List<Cliente> obtenerTodos() {
        return clienteRepository.findAll();
    }

    @Override
    public Cliente obtenerPorId(Long id) {
        return clienteRepository.findById(id).orElse(null);
    }

    @Override
    public Cliente crearCliente(ClienteDTO dto) {
        Cliente cliente = new Cliente();
        cliente.setNombre(dto.getNombre());
        cliente.setEmail(dto.getEmail());
        cliente.setTelefono(dto.getTelefono());
        return clienteRepository.save(cliente);
    }

    @Override
    public Cliente actualizarCliente(Long id, ClienteDTO dto) {
        return clienteRepository.findById(id).map(c -> {
            c.setNombre(dto.getNombre());
            c.setEmail(dto.getEmail());
            c.setTelefono(dto.getTelefono());
            return clienteRepository.save(c);
        }).orElse(null);
    }

    @Override
    public boolean eliminarCliente(Long id) {
        if (!clienteRepository.existsById(id)) return false;
        clienteRepository.deleteById(id);
        return true;
    }
}