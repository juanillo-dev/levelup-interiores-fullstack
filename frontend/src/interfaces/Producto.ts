export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  empresaId: number; // 👈 AÑADIR ESTO
}