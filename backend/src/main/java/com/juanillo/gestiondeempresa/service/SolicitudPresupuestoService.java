package com.juanillo.gestiondeempresa.service;

import com.juanillo.gestiondeempresa.model.SolicitudPresupuesto;
import com.juanillo.gestiondeempresa.dto.SolicitudPresupuestoDTO;
import java.util.List;

public interface SolicitudPresupuestoService {
    List<SolicitudPresupuesto> obtenerTodos();
    SolicitudPresupuesto obtenerPorId(Long id);
    SolicitudPresupuesto crearSolicitud(SolicitudPresupuestoDTO dto);
    SolicitudPresupuesto actualizarSolicitud(Long id, SolicitudPresupuestoDTO dto);
    boolean eliminarSolicitud(Long id);
}