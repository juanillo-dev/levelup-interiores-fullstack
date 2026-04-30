package com.juanillo.springbootserviceswebsite.service;

import com.juanillo.springbootserviceswebsite.entity.Producto;
import com.juanillo.springbootserviceswebsite.dto.ProductoDTO;
import java.util.List;

public interface ProductoService {
    List<Producto> obtenerTodos();
    Producto obtenerPorId(Long id);
    Producto crearProducto(ProductoDTO productoDTO);
    Producto actualizarProducto(Long id, ProductoDTO productoDTO);
    boolean eliminarProducto(Long id);
}