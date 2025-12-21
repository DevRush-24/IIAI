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
import Blog2 from "./pages/Blog2.jsx";
import Blog3 from "./pages/Blog3.jsx";
import Blog4 from "./pages/Blog4.jsx";


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
        <Route path="/news-updates" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/1" element={<Blog1 />} />
        <Route path="/blog/2" element={<ProtectedRoute><Blog2 /></ProtectedRoute>} />
        <Route path="/blog/3" element={<ProtectedRoute><Blog3 /></ProtectedRoute>} />
        <Route path="/blog/4" element={<ProtectedRoute><Blog4 /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
