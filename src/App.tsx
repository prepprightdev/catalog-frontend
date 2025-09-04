import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { RootState } from "./store";

function App() {
  const user = useSelector((state: RootState) => state.auth.user);
  const role = user?.role ?? "guest"; // Provide a default role if no user is logged in

  return (
    <BrowserRouter>
      <Navbar role={role} />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
