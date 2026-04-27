package com.juanillo.gestiondeempresa.repository;

import com.juanillo.gestiondeempresa.entity.Factura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacturaRepository extends JpaRepository<Factura, Long> {
}