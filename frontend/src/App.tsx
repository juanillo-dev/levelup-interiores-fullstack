import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import { Home } from "./pages/Home";
import { ProductosPage } from "./pages/Productos";
import { ClientesPage } from "./pages/Clientes";
import { FacturasPage } from "./pages/Facturas";
import { EmpresasPage } from "./pages/Empresas";
import { SolicitudesPresupuestoPage } from "./pages/SolicitudesPresupuesto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/facturas" element={<FacturasPage />} />
        <Route path="/empresas" element={<EmpresasPage />} />

        {/* 👇 IMPORTANTE: esta es la ruta del botón */}
        <Route
          path="/solicitudesPresupuesto"
          element={<SolicitudesPresupuestoPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;