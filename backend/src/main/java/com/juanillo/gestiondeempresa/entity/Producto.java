package com.juanillo.gestiondeempresa.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.math.BigDecimal;

@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String descripcion;

    private BigDecimal precio;

    @ManyToOne
    @JoinColumn(name = "empresa_id")
    private Empresa empresa;

    // Constructor vacío
    public Producto() {}

    // Constructor con parámetros
    public Producto(String descripcion, BigDecimal precio, Empresa empresa) {
        this.descripcion = descripcion;
        this.precio = precio;
        this.empresa = empresa;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
    public BigDecimal getPrecio() { return precio; }
    public void setPrecio(BigDecimal precio) { this.precio = precio; }
    public Empresa getEmpresa() { return empresa; }
    public void setEmpresa(Empresa empresa) { this.empresa = empresa; }
}