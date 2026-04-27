export interface Factura {
  id: number;
  fecha: string;
  total: number;
  clienteId: number;
  empresaId: number; // 👈 ESTA ES LA CLAVE
}