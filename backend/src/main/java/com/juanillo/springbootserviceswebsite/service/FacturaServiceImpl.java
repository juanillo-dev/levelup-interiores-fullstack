package com.juanillo.springbootserviceswebsite.service;

import com.juanillo.springbootserviceswebsite.entity.Factura;
import com.juanillo.springbootserviceswebsite.entity.Cliente;
import com.juanillo.springbootserviceswebsite.dto.FacturaDTO;
import com.juanillo.springbootserviceswebsite.repository.FacturaRepository;
import com.juanillo.springbootserviceswebsite.repository.ClienteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class FacturaServiceImpl implements FacturaService {

    @Autowired
    private FacturaRepository facturaRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public List<Factura> obtenerTodos() {
        return facturaRepository.findAll();
    }

    @Override
    public Factura obtenerPorId(Long id) {
        return facturaRepository.findById(id).orElse(null);
    }

    @Override
    public Factura crearFactura(FacturaDTO dto) {

        Cliente cliente = clienteRepository.findById(dto.getClienteId())
                .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));

        Factura factura = new Factura();
        factura.setFecha(dto.getFecha());
        factura.setTotal(BigDecimal.valueOf(dto.getTotal()));
        factura.setCliente(cliente);

        return facturaRepository.save(factura);
    }

    @Override
    public Factura actualizarFactura(Long id, FacturaDTO dto) {

        return facturaRepository.findById(id).map(f -> {

            Cliente cliente = clienteRepository.findById(dto.getClienteId())
                    .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));

            f.setFecha(dto.getFecha());
            f.setTotal(BigDecimal.valueOf(dto.getTotal()));
            f.setCliente(cliente);

            return facturaRepository.save(f);

        }).orElse(null);
    }

    @Override
    public boolean eliminarFactura(Long id) {
        if (!facturaRepository.existsById(id)) return false;
        facturaRepository.deleteById(id);
        return true;
    }
}