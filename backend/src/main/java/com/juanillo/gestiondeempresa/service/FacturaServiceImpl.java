package com.juanillo.gestiondeempresa.service;

import com.juanillo.gestiondeempresa.entity.Factura;
import com.juanillo.gestiondeempresa.dto.FacturaDTO;
import com.juanillo.gestiondeempresa.repository.FacturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FacturaServiceImpl implements FacturaService {

    @Autowired
    private FacturaRepository facturaRepository;

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
        Factura factura = new Factura();
        factura.setNumero(dto.getNumero());
        factura.setCliente(dto.getCliente());
        factura.setFecha(dto.getFecha());
        factura.setTotal(dto.getTotal());
        return facturaRepository.save(factura);
    }

    @Override
    public Factura actualizarFactura(Long id, FacturaDTO dto) {
        return facturaRepository.findById(id).map(f -> {
            f.setNumero(dto.getNumero());
            f.setCliente(dto.getCliente());
            f.setFecha(dto.getFecha());
            f.setTotal(dto.getTotal());
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