import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null); // null = checking
  const token = localStorage.getItem("token");

  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setIsValid(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:5001/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 200) {
          setIsValid(true);
        } else {
          localStorage.removeItem("token");
          setIsValid(false);
        }
      } catch {
        localStorage.removeItem("token");
        setIsValid(false);
      }
    };

    validateToken();
  }, [token]);

  if (isValid === null) return <p style={{color:'white'}}>Checking login...</p>;

  return isValid ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
