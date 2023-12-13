import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Farms from "./pages/Farms";
import NavigationBar from "./components/NavigationBar";
import Analytics from "./pages/Analytics";
import Species from "./pages/Species";

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Farms />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/species" element={<Species />} />
      </Routes>
    </Router>
  );
};

export default App;
