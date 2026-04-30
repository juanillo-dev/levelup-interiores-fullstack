package com.juanillo.springbootserviceswebsite.repository;

import com.juanillo.springbootserviceswebsite.entity.SolicitudPresupuesto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SolicitudPresupuestoRepository extends JpaRepository<SolicitudPresupuesto, Long> {
}