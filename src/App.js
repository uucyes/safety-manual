import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DisasterManagement from "./pages/DisasterManagement";
import SafetyAccident from "./pages/SafetyAccident";
import FacilityManagement from "./pages/FacilityManagement";
import EmotionalLabor from "./pages/EmotionalLabor";
import EthicalManagement from "./pages/EthicalManagement";
import HumanRights from "./pages/HumanRights";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disaster" element={<DisasterManagement />} />
        <Route path="/safety" element={<SafetyAccident />} />
        <Route path="/facility" element={<FacilityManagement />} />
        <Route path="/emotional" element={<EmotionalLabor />} />
        <Route path="/ethics" element={<EthicalManagement />} />
        <Route path="/human-rights" element={<HumanRights />} />
      </Routes>
    </div>
  );
};

export default App;