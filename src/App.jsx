import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { TokenContext } from "./TokenContext";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { getToken } from "./utils/common";

function App() {
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    let token = getToken() ? true : false;
    setIsToken(token);
  }, []);

  return (
    <TokenContext.Provider value={[isToken, setIsToken]}>
      <Routes>
        <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/Login" element={<Login />} />
        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </TokenContext.Provider>
  );
}

export default App;
