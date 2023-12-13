import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Farms from "./pages/Farms";
import NavigationBar from "./components/NavigationBar";
import Analytics from "./pages/Analytics";
import BioMetrics from "./pages/BioMetrics";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Farms />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/biometrics" element={<BioMetrics />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
