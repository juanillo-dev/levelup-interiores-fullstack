package com.juanillo.gestiondeempresa.service;

import com.juanillo.gestiondeempresa.entity.Empresa;
import com.juanillo.gestiondeempresa.dto.EmpresaDTO;
import java.util.List;

public interface EmpresaService {
    List<Empresa> obtenerTodos();
    Empresa obtenerPorId(Long id);
    Empresa crearEmpresa(EmpresaDTO empresaDTO);
    Empresa actualizarEmpresa(Long id, EmpresaDTO empresaDTO);
    boolean eliminarEmpresa(Long id);
}