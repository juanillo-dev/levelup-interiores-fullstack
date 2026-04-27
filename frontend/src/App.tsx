import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import { ProductosPage } from "./pages/Productos";
import { ClientesPage } from "./pages/Clientes";
import { FacturasPage } from "./pages/Facturas";
import { EmpresasPage } from "./pages/Empresas";
import { SolicitudesPresupuestoPage } from "./pages/SolicitudesPresupuesto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/productos" />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/facturas" element={<FacturasPage />} />
        <Route path="/empresas" element={<EmpresasPage />} />
        <Route path="/solicitudesPresupuesto" element={<SolicitudesPresupuestoPage />} />
      </Routes>
    </Router>
  );
}

export default App;