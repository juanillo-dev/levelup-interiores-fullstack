package com.juanillo.springbootserviceswebsite.dto;

import java.time.LocalDate;

public class SolicitudPresupuestoDTO {

    private Long id;
    private String descripcion;
    private LocalDate fechaSolicitud;
    private Long clienteId;

    public SolicitudPresupuestoDTO() {}

    public SolicitudPresupuestoDTO(Long id, String descripcion, LocalDate fechaSolicitud, Long clienteId) {
        this.id = id;
        this.descripcion = descripcion;
        this.fechaSolicitud = fechaSolicitud;
        this.clienteId = clienteId;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public LocalDate getFechaSolicitud() { return fechaSolicitud; }
    public void setFechaSolicitud(LocalDate fechaSolicitud) { this.fechaSolicitud = fechaSolicitud; }

    public Long getClienteId() { return clienteId; }
    public void setClienteId(Long clienteId) { this.clienteId = clienteId; }
}