import React, { useEffect, useState } from "react";
import "../style.css";

function Topbar() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null); // re-render to hide logout button
    window.location.reload(); // optional: refresh page
  };

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar px-0 d-none d-lg-block bg-dark text-white">
        <div className="container px-0">
          <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
            <div className="col-lg-9 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a href="#" className="text-white me-4 text-decoration-none">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  ATL Corporate Park, Saki Vihar Road, Mumbai 400 072
                </a>
                <a href="#" className="text-white me-4 text-decoration-none">
                  <i className="fas fa-phone-alt text-primary me-2"></i>
                  +91.22.6825.9608
                </a>
                <a href="#" className="text-white me-0 text-decoration-none">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  info@iiai-india.com
                </a>
              </div>
            </div>

            <div className="col-lg-3 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">

                {/* --- Social Icons --- */}
                <a href="#" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle nav-fill me-0">
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>

                {/* --- Logout Button (shown only if token exists) --- */}
                {token && (
                  <button
                    onClick={handleLogout}
                    className="btn btn-danger btn-square rounded-circle nav-fill me-0 mx-3"
                  >
                    <i class="fa-solid fa-power-off"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
    </>
  );
}

export default Topbar;
