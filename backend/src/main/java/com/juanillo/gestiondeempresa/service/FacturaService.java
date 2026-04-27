package com.juanillo.gestiondeempresa.service;

import com.juanillo.gestiondeempresa.entity.Factura;
import com.juanillo.gestiondeempresa.dto.FacturaDTO;
import java.util.List;

public interface FacturaService {
    List<Factura> obtenerTodos();
    Factura obtenerPorId(Long id);
    Factura crearFactura(FacturaDTO facturaDTO);
    Factura actualizarFactura(Long id, FacturaDTO facturaDTO);
    boolean eliminarFactura(Long id);
}