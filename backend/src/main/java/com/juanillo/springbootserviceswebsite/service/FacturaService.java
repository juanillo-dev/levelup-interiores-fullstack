package com.juanillo.springbootserviceswebsite.service;

import com.juanillo.springbootserviceswebsite.entity.Factura;
import com.juanillo.springbootserviceswebsite.dto.FacturaDTO;
import java.util.List;

public interface FacturaService {
    List<Factura> obtenerTodos();
    Factura obtenerPorId(Long id);
    Factura crearFactura(FacturaDTO facturaDTO);
    Factura actualizarFactura(Long id, FacturaDTO facturaDTO);
    boolean eliminarFactura(Long id);
}