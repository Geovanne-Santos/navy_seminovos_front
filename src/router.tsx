import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sobre } from "./pages/Sobre";
import { Home } from "./pages/Home";

export const AppRouter = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );