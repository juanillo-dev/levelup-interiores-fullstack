package com.juanillo.springbootserviceswebsite.dto;

public class ProductoDTO {

    private Long id;
    private String descripcion;
    private double precio;
    private Long empresaId;

    public ProductoDTO() {}

    public ProductoDTO(Long id, String descripcion, double precio, Long empresaId) {
        this.id = id;
        this.descripcion = descripcion;
        this.precio = precio;
        this.empresaId = empresaId;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public double getPrecio() { return precio; }
    public void setPrecio(double precio) { this.precio = precio; }

    public Long getEmpresaId() { return empresaId; }
    public void setEmpresaId(Long empresaId) { this.empresaId = empresaId; }
}