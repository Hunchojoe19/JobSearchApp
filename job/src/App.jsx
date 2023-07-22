import "./App.css";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Organization from "./pages/Organization";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {}, []);
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/organization" element={<Organization />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
