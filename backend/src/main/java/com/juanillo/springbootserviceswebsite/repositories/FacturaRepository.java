package com.juanillo.springbootserviceswebsite.repository;

import com.juanillo.springbootserviceswebsite.entity.Factura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacturaRepository extends JpaRepository<Factura, Long> {
}