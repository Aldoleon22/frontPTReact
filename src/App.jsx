import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { TokenContext } from "./TokenContext";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [isToken, setIsToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsToken(true);
      // Redirection en fonction du statut de l'utilisateur
      const userStatus = localStorage.getItem("userStatus");
      switch (userStatus) {
        case "superAdmin":
          navigate("/superadmin");
          break;
        case "admin":
          navigate("/admin");
          break;
        default:
          navigate("/home");
          break;
      }
    } else {
      setIsToken(false); // Assure que l'utilisateur est déconnecté si aucun token n'est trouvé
      navigate("/login"); // Redirection vers la page de login si aucun token n'est trouvé
    }
  }, [navigate]);

  return (
    <TokenContext.Provider value={[isToken, setIsToken]}>
      <Routes>
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </TokenContext.Provider>
  );
};

export default App;
