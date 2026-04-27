package com.juanillo.gestiondeempresa.service;

import com.juanillo.gestiondeempresa.model.Producto;
import com.juanillo.gestiondeempresa.dto.ProductoDTO;
import java.util.List;

public interface ProductoService {
    List<Producto> obtenerTodos();
    Producto obtenerPorId(Long id);
    Producto crearProducto(ProductoDTO productoDTO);
    Producto actualizarProducto(Long id, ProductoDTO productoDTO);
    boolean eliminarProducto(Long id);
}