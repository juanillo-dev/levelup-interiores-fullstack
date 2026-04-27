package com.juanillo.gestiondeempresa.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "facturas")
public class Factura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double numero;

    private BigDecimal total;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    // Constructor vacío
    public Factura() {}

    // Constructor con parámetros
    public Factura(double numero, BigDecimal total, Cliente cliente) {
        this.numero = numero;
        this.total = total;
        this.cliente = cliente;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public double getNumero() { return numero; }
    public void setNumero(double numero) { this.numero = numero; }
    public BigDecimal getTotal() { return total; }
    public void setTotal(BigDecimal total) { this.total = total; }
    public Cliente getCliente() { return cliente; }
    public void setCliente(Cliente cliente) { this.cliente = cliente; }
}