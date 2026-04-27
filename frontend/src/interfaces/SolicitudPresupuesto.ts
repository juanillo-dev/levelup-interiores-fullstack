export interface SolicitudPresupuesto {
  id: number;
  clienteId: number;
  empresaId: number;        // 👈 lo estás usando
  descripcion: string;
  fechaSolicitud: string;   // 👈 lo estás usando
  estado: string;
}