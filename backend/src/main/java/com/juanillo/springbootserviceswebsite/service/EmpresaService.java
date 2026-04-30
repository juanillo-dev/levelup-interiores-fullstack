package com.juanillo.springbootserviceswebsite.service;

import com.juanillo.springbootserviceswebsite.entity.Empresa;
import com.juanillo.springbootserviceswebsite.dto.EmpresaDTO;
import java.util.List;

public interface EmpresaService {
    List<Empresa> obtenerTodos();
    Empresa obtenerPorId(Long id);
    Empresa crearEmpresa(EmpresaDTO empresaDTO);
    Empresa actualizarEmpresa(Long id, EmpresaDTO empresaDTO);
    boolean eliminarEmpresa(Long id);
}