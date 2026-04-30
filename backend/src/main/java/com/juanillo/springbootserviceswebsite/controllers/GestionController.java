package com.juanillo.springbootserviceswebsite.controller;

import com.juanillo.springbootserviceswebsite.dto.*;
import com.juanillo.springbootserviceswebsite.entity.*;
import com.juanillo.springbootserviceswebsite.service.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class GestionController {

    @Autowired private ProductoService productoService;
    @Autowired private ClienteService clienteService;
    @Autowired private EmpresaService empresaService;
    @Autowired private FacturaService facturaService;
    @Autowired private SolicitudPresupuestoService solicitudService;

    // ===================== PRODUCTOS =====================
    @GetMapping("/productos")
    public List<Producto> getProductos() {
        return productoService.obtenerTodos();
    }

    @GetMapping("/productos/{id}")
    public ResponseEntity<Producto> getProducto(@PathVariable Long id) {
        Producto p = productoService.obtenerPorId(id);
        return (p != null) ? ResponseEntity.ok(p) : ResponseEntity.notFound().build();
    }

    @PostMapping("/productos")
    public Producto crearProducto(@Valid @RequestBody ProductoDTO dto) {
        return productoService.crearProducto(dto);
    }

    @PutMapping("/productos/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id, @Valid @RequestBody ProductoDTO dto) {
        Producto p = productoService.actualizarProducto(id, dto);
        return (p != null) ? ResponseEntity.ok(p) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/productos/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
        return productoService.eliminarProducto(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    // ===================== CLIENTES =====================
    @GetMapping("/clientes")
    public List<Cliente> getClientes() {
        return clienteService.obtenerTodos();
    }

    @GetMapping("/clientes/{id}")
    public ResponseEntity<Cliente> getCliente(@PathVariable Long id) {
        Cliente c = clienteService.obtenerPorId(id);
        return (c != null) ? ResponseEntity.ok(c) : ResponseEntity.notFound().build();
    }

    @PostMapping("/clientes")
    public Cliente crearCliente(@Valid @RequestBody ClienteDTO dto) {
        return clienteService.crearCliente(dto);
    }

    @PutMapping("/clientes/{id}")
    public ResponseEntity<Cliente> actualizarCliente(@PathVariable Long id, @Valid @RequestBody ClienteDTO dto) {
        Cliente c = clienteService.actualizarCliente(id, dto);
        return (c != null) ? ResponseEntity.ok(c) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/clientes/{id}")
    public ResponseEntity<Void> eliminarCliente(@PathVariable Long id) {
        return clienteService.eliminarCliente(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    // ===================== EMPRESAS =====================
    @GetMapping("/empresas")
    public List<Empresa> getEmpresas() {
        return empresaService.obtenerTodos();
    }

    @GetMapping("/empresas/{id}")
    public ResponseEntity<Empresa> getEmpresa(@PathVariable Long id) {
        Empresa e = empresaService.obtenerPorId(id);
        return (e != null) ? ResponseEntity.ok(e) : ResponseEntity.notFound().build();
    }

    @PostMapping("/empresas")
    public Empresa crearEmpresa(@Valid @RequestBody EmpresaDTO dto) {
        return empresaService.crearEmpresa(dto);
    }

    @PutMapping("/empresas/{id}")
    public ResponseEntity<Empresa> actualizarEmpresa(@PathVariable Long id, @Valid @RequestBody EmpresaDTO dto) {
        Empresa e = empresaService.actualizarEmpresa(id, dto);
        return (e != null) ? ResponseEntity.ok(e) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/empresas/{id}")
    public ResponseEntity<Void> eliminarEmpresa(@PathVariable Long id) {
        return empresaService.eliminarEmpresa(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    // ===================== FACTURAS =====================
    @GetMapping("/facturas")
    public List<Factura> getFacturas() {
        return facturaService.obtenerTodos();
    }

    @GetMapping("/facturas/{id}")
    public ResponseEntity<Factura> getFactura(@PathVariable Long id) {
        Factura f = facturaService.obtenerPorId(id);
        return (f != null) ? ResponseEntity.ok(f) : ResponseEntity.notFound().build();
    }

    @PostMapping("/facturas")
    public Factura crearFactura(@Valid @RequestBody FacturaDTO dto) {
        return facturaService.crearFactura(dto);
    }

    @PutMapping("/facturas/{id}")
    public ResponseEntity<Factura> actualizarFactura(@PathVariable Long id, @Valid @RequestBody FacturaDTO dto) {
        Factura f = facturaService.actualizarFactura(id, dto);
        return (f != null) ? ResponseEntity.ok(f) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/facturas/{id}")
    public ResponseEntity<Void> eliminarFactura(@PathVariable Long id) {
        return facturaService.eliminarFactura(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    // ===================== SOLICITUDES =====================
    @GetMapping("/solicitudes")
    public List<SolicitudPresupuesto> getSolicitudes() {
        return solicitudService.obtenerTodos();
    }

    @GetMapping("/solicitudes/{id}")
    public ResponseEntity<SolicitudPresupuesto> getSolicitud(@PathVariable Long id) {
        SolicitudPresupuesto s = solicitudService.obtenerPorId(id);
        return (s != null) ? ResponseEntity.ok(s) : ResponseEntity.notFound().build();
    }

    @PostMapping("/solicitudes")
    public SolicitudPresupuesto crearSolicitud(@Valid @RequestBody SolicitudPresupuestoDTO dto) {
        return solicitudService.crearSolicitud(dto);
    }

    @PutMapping("/solicitudes/{id}")
    public ResponseEntity<SolicitudPresupuesto> actualizarSolicitud(@PathVariable Long id, @Valid @RequestBody SolicitudPresupuestoDTO dto) {
        SolicitudPresupuesto s = solicitudService.actualizarSolicitud(id, dto);
        return (s != null) ? ResponseEntity.ok(s) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/solicitudes/{id}")
    public ResponseEntity<Void> eliminarSolicitud(@PathVariable Long id) {
        return solicitudService.eliminarSolicitud(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}