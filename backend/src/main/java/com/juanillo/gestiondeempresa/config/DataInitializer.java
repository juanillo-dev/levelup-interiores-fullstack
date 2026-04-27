package com.juanillo.gestiondeempresa.config;

import com.juanillo.gestiondeempresa.entity.*;
import com.juanillo.gestiondeempresa.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.time.LocalDate;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner init(
            EmpresaRepository empresaRepo,
            ClienteRepository clienteRepo,
            ProductoRepository productoRepo,
            FacturaRepository facturaRepo,
            SolicitudPresupuestoRepository solicitudRepo
    ) {
        return args -> {

            // --- Empresas ---
            Empresa e1 = new Empresa();
            e1.setNombre("Empresa Alfa");
            Empresa e2 = new Empresa();
            e2.setNombre("Empresa Beta");

            if (empresaRepo.count() == 0) {
                empresaRepo.save(e1);
                empresaRepo.save(e2);
            }

            // --- Clientes ---
            Cliente c1 = new Cliente();
            c1.setNombre("Juan");
            c1.setEmail("juan@email.com");
            c1.setTelefono("600111222");
            c1.setEmpresa(e1);

            Cliente c2 = new Cliente();
            c2.setNombre("Ana");
            c2.setEmail("ana@email.com");
            c2.setTelefono("600333444");
            c2.setEmpresa(e2);

            if (clienteRepo.count() == 0) {
                clienteRepo.save(c1);
                clienteRepo.save(c2);
            }

            // --- Productos ---
            Producto p1 = new Producto();
            p1.setDescripcion("Producto A");
            p1.setPrecio(BigDecimal.valueOf(100.0));
            p1.setEmpresa(e1);

            Producto p2 = new Producto();
            p2.setDescripcion("Producto B");
            p2.setPrecio(BigDecimal.valueOf(150.0));
            p2.setEmpresa(e2);

            if (productoRepo.count() == 0) {
                productoRepo.save(p1);
                productoRepo.save(p2);
            }

            // --- Facturas ---
            Factura f1 = new Factura();
            f1.setNumero(1);
            f1.setTotal(BigDecimal.valueOf(100.0));
            f1.setCliente(c1);

            Factura f2 = new Factura();
            f2.setNumero(2);
            f2.setTotal(BigDecimal.valueOf(150.0));
            f2.setCliente(c2);

            if (facturaRepo.count() == 0) {
                facturaRepo.save(f1);
                facturaRepo.save(f2);
            }

            // --- Solicitudes de Presupuesto ---
            SolicitudPresupuesto s1 = new SolicitudPresupuesto();
            s1.setCliente(c1);
            s1.setFecha(LocalDate.now());

            SolicitudPresupuesto s2 = new SolicitudPresupuesto();
            s2.setCliente(c2);
            s2.setFecha(LocalDate.now());

            if (solicitudRepo.count() == 0) {
                solicitudRepo.save(s1);
                solicitudRepo.save(s2);
            }

        };
    }
}