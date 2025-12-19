import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Blog1 from "./pages/Blog.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* This container component will render all your toasts */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        style={{ top: "160px" }}
      />
      <Routes>
        <Route path="/articles" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<ProtectedRoute><Blog1 /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
