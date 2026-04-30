package com.juanillo.springbootserviceswebsite.service;

import com.juanillo.springbootserviceswebsite.dto.SolicitudPresupuestoDTO;
import com.juanillo.springbootserviceswebsite.entity.SolicitudPresupuesto;
import com.juanillo.springbootserviceswebsite.repository.SolicitudPresupuestoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SolicitudPresupuestoServiceImpl implements SolicitudPresupuestoService {

    private final SolicitudPresupuestoRepository solicitudRepository;

    public SolicitudPresupuestoServiceImpl(SolicitudPresupuestoRepository solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
    }

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

        // ❌ NO usamos cliente porque solo tienes clienteId (no objeto Cliente)
        // solicitud.setCliente(...);

        solicitud.setDescripcion(dto.getDescripcion());
        solicitud.setFecha(dto.getFechaSolicitud());

        return solicitudRepository.save(solicitud);
    }

    @Override
    public SolicitudPresupuesto actualizarSolicitud(Long id, SolicitudPresupuestoDTO dto) {
        return solicitudRepository.findById(id).map(s -> {

            // ❌ lo mismo aquí
            // s.setCliente(...);

            s.setDescripcion(dto.getDescripcion());
            s.setFecha(dto.getFechaSolicitud());

            return solicitudRepository.save(s);

        }).orElse(null);
    }

    @Override
    public boolean eliminarSolicitud(Long id) {
        if (solicitudRepository.existsById(id)) {
            solicitudRepository.deleteById(id);
            return true;
        }
        return false;
    }
}