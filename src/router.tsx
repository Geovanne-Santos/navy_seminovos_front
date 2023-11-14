import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BuscarCarro } from "./pages/BuscarCarro";
import { Home } from "./pages/Home";

export const AppRouter = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="BuscarCarro" element={<BuscarCarro />} />
      </Routes>
    </Router>
  );