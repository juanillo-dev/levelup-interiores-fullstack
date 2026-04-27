import axios from "axios";
import { Producto } from "../interfaces/Producto";
import { Cliente } from "../interfaces/Cliente";
import { Factura } from "../interfaces/Factura";
import { Empresa } from "../interfaces/Empresa";
import { SolicitudPresupuesto } from "../interfaces/SolicitudPresupuesto";

const API_URL = "http://localhost:8080";

// ---------- PRODUCTOS ----------
export const getProductos = async (): Promise<Producto[]> => {
  const res = await axios.get<Producto[]>(`${API_URL}/productos`);
  return res.data;
};

export const createProducto = async (producto: Producto): Promise<Producto> => {
  const res = await axios.post<Producto>(`${API_URL}/productos`, producto);
  return res.data;
};

export const updateProducto = async (id: number, producto: Producto): Promise<Producto> => {
  const res = await axios.put<Producto>(`${API_URL}/productos/${id}`, producto);
  return res.data;
};

export const deleteProducto = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/productos/${id}`);
};

// ---------- CLIENTES ----------
export const getClientes = async (): Promise<Cliente[]> => {
  const res = await axios.get<Cliente[]>(`${API_URL}/clientes`);
  return res.data;
};

export const createCliente = async (cliente: Cliente): Promise<Cliente> => {
  const res = await axios.post<Cliente>(`${API_URL}/clientes`, cliente);
  return res.data;
};

export const updateCliente = async (id: number, cliente: Cliente): Promise<Cliente> => {
  const res = await axios.put<Cliente>(`${API_URL}/clientes/${id}`, cliente);
  return res.data;
};

export const deleteCliente = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/clientes/${id}`);
};

// ---------- FACTURAS ----------
export const getFacturas = async (): Promise<Factura[]> => {
  const res = await axios.get<Factura[]>(`${API_URL}/facturas`);
  return res.data;
};

export const createFactura = async (factura: Factura): Promise<Factura> => {
  const res = await axios.post<Factura>(`${API_URL}/facturas`, factura);
  return res.data;
};

export const updateFactura = async (id: number, factura: Factura): Promise<Factura> => {
  const res = await axios.put<Factura>(`${API_URL}/facturas/${id}`, factura);
  return res.data;
};

export const deleteFactura = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/facturas/${id}`);
};

// ---------- EMPRESAS ----------
export const getEmpresas = async (): Promise<Empresa[]> => {
  const res = await axios.get<Empresa[]>(`${API_URL}/empresas`);
  return res.data;
};

export const createEmpresa = async (empresa: Empresa): Promise<Empresa> => {
  const res = await axios.post<Empresa>(`${API_URL}/empresas`, empresa);
  return res.data;
};

export const updateEmpresa = async (id: number, empresa: Empresa): Promise<Empresa> => {
  const res = await axios.put<Empresa>(`${API_URL}/empresas/${id}`, empresa);
  return res.data;
};

export const deleteEmpresa = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/empresas/${id}`);
};

// ---------- SOLICITUDES DE PRESUPUESTO ----------
export const getSolicitudesPresupuesto = async (): Promise<SolicitudPresupuesto[]> => {
  const res = await axios.get<SolicitudPresupuesto[]>(`${API_URL}/solicitudesPresupuesto`);
  return res.data;
};

export const createSolicitudPresupuesto = async (solicitud: SolicitudPresupuesto): Promise<SolicitudPresupuesto> => {
  const res = await axios.post<SolicitudPresupuesto>(`${API_URL}/solicitudesPresupuesto`, solicitud);
  return res.data;
};

export const updateSolicitudPresupuesto = async (id: number, solicitud: SolicitudPresupuesto): Promise<SolicitudPresupuesto> => {
  const res = await axios.put<SolicitudPresupuesto>(`${API_URL}/solicitudesPresupuesto/${id}`, solicitud);
  return res.data;
};

export const deleteSolicitudPresupuesto = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/solicitudesPresupuesto/${id}`);
};