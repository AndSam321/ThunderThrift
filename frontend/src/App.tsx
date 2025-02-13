import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProductGrid from "./components/ProductGrid";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import TermsOfService from "./components/TermsOfService";
import AuthCallback from "./components/AuthCallback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="products" element={<ProductGrid />} />
          <Route path="login" element={<Login />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="auth/callback" element={<AuthCallback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
