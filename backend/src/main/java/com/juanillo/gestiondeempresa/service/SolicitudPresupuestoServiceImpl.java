package com.juanillo.gestiondeempresa.service;

import com.juanillo.gestiondeempresa.model.SolicitudPresupuesto;
import com.juanillo.gestiondeempresa.dto.SolicitudPresupuestoDTO;
import com.juanillo.gestiondeempresa.repository.SolicitudPresupuestoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SolicitudPresupuestoServiceImpl implements SolicitudPresupuestoService {

    @Autowired
    private SolicitudPresupuestoRepository solicitudRepository;

    @Override
    public List<SolicitudPresupuesto> obtenerTodos() {
        return solicitudRepository.findAll();
    }

    @Override
    public SolicitudPresupuesto obtenerPorId(Long id) {
        return solicitudRepository.findById(id).orElse(null);
    }

    @Override
    public SolicitudPresupuesto crearSolicitud(SolicitudPresupuestoDTO dto) {
        SolicitudPresupuesto solicitud = new SolicitudPresupuesto();
        solicitud.setCliente(dto.getCliente());
        solicitud.setDescripcion(dto.getDescripcion());
        solicitud.setFecha(dto.getFecha());
        return solicitudRepository.save(solicitud);
    }

    @Override
    public SolicitudPresupuesto actualizarSolicitud(Long id, SolicitudPresupuestoDTO dto) {
        return solicitudRepository.findById(id).map(s -> {
            s.setCliente(dto.getCliente());
            s.setDescripcion(dto.getDescripcion());
            s.setFecha(dto.getFecha());
            return solicitudRepository.save(s);
        }).orElse(null);
    }

    @Override
    public boolean eliminarSolicitud(Long id) {
        if (!solicitudRepository.existsById(id)) return false;
        solicitudRepository.deleteById(id);
        return true;
    }
}