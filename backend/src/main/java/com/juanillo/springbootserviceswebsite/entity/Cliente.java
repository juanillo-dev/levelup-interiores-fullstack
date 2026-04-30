package com.juanillo.springbootserviceswebsite.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table(name = "clientes")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String nombre;

    @Email
    private String email;

    private String telefono;

    // Relaciones
    @OneToMany(mappedBy = "cliente")
    private List<Factura> facturas;

    @OneToMany(mappedBy = "cliente")
    private List<SolicitudPresupuesto> solicitudes;

    // Constructor vacío
    public Cliente() {}

    // Constructor con parámetros
    public Cliente(String nombre, String email, String telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }
    public List<Factura> getFacturas() { return facturas; }
    public void setFacturas(List<Factura> facturas) { this.facturas = facturas; }
    public List<SolicitudPresupuesto> getSolicitudes() { return solicitudes; }
    public void setSolicitudes(List<SolicitudPresupuesto> solicitudes) { this.solicitudes = solicitudes; }
}