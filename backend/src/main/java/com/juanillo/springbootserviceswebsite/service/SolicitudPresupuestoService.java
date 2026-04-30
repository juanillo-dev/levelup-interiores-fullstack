package com.juanillo.springbootserviceswebsite.service;

import com.juanillo.springbootserviceswebsite.entity.SolicitudPresupuesto;
import com.juanillo.springbootserviceswebsite.dto.SolicitudPresupuestoDTO;
import java.util.List;

public interface SolicitudPresupuestoService {
    List<SolicitudPresupuesto> obtenerTodos();
    SolicitudPresupuesto obtenerPorId(Long id);
    SolicitudPresupuesto crearSolicitud(SolicitudPresupuestoDTO dto);
    SolicitudPresupuesto actualizarSolicitud(Long id, SolicitudPresupuestoDTO dto);
    boolean eliminarSolicitud(Long id);
}