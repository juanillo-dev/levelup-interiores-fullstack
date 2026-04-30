package com.juanillo.springbootserviceswebsite.service;

import com.juanillo.springbootserviceswebsite.entity.Producto;
import com.juanillo.springbootserviceswebsite.entity.Empresa;
import com.juanillo.springbootserviceswebsite.dto.ProductoDTO;
import com.juanillo.springbootserviceswebsite.repository.ProductoRepository;
import com.juanillo.springbootserviceswebsite.repository.EmpresaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class ProductoServiceImpl implements ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private EmpresaRepository empresaRepository;

    @Override
    public List<Producto> obtenerTodos() {
        return productoRepository.findAll();
    }

    @Override
    public Producto obtenerPorId(Long id) {
        return productoRepository.findById(id).orElse(null);
    }

    @Override
    public Producto crearProducto(ProductoDTO dto) {

        Empresa empresa = empresaRepository.findById(dto.getEmpresaId())
                .orElseThrow(() -> new RuntimeException("Empresa no encontrada"));

        Producto producto = new Producto();
        producto.setDescripcion(dto.getDescripcion());
        producto.setPrecio(BigDecimal.valueOf(dto.getPrecio()));
        producto.setEmpresa(empresa);

        return productoRepository.save(producto);
    }

    @Override
    public Producto actualizarProducto(Long id, ProductoDTO dto) {

        return productoRepository.findById(id).map(p -> {

            Empresa empresa = empresaRepository.findById(dto.getEmpresaId())
                    .orElseThrow(() -> new RuntimeException("Empresa no encontrada"));

            p.setDescripcion(dto.getDescripcion());
            p.setPrecio(BigDecimal.valueOf(dto.getPrecio()));
            p.setEmpresa(empresa);

            return productoRepository.save(p);

        }).orElse(null);
    }

    @Override
    public boolean eliminarProducto(Long id) {
        if (!productoRepository.existsById(id)) return false;
        productoRepository.deleteById(id);
        return true;
    }
}