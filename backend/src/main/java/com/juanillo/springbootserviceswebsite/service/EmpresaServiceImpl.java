package com.juanillo.springbootserviceswebsite.service;

import com.juanillo.springbootserviceswebsite.entity.Empresa;
import com.juanillo.springbootserviceswebsite.dto.EmpresaDTO;
import com.juanillo.springbootserviceswebsite.repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmpresaServiceImpl implements EmpresaService {

    @Autowired
    private EmpresaRepository empresaRepository;

    @Override
    public List<Empresa> obtenerTodos() {
        return empresaRepository.findAll();
    }

    @Override
    public Empresa obtenerPorId(Long id) {
        return empresaRepository.findById(id).orElse(null);
    }

    @Override
    public Empresa crearEmpresa(EmpresaDTO dto) {
        Empresa empresa = new Empresa();
        empresa.setNombre(dto.getNombre());
        empresa.setDireccion(dto.getDireccion());
        empresa.setTelefono(dto.getTelefono());
        return empresaRepository.save(empresa);
    }

    @Override
    public Empresa actualizarEmpresa(Long id, EmpresaDTO dto) {
        return empresaRepository.findById(id).map(e -> {
            e.setNombre(dto.getNombre());
            e.setDireccion(dto.getDireccion());
            e.setTelefono(dto.getTelefono());
            return empresaRepository.save(e);
        }).orElse(null);
    }

    @Override
    public boolean eliminarEmpresa(Long id) {
        if (!empresaRepository.existsById(id)) return false;
        empresaRepository.deleteById(id);
        return true;
    }
}