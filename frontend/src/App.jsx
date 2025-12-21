import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import image1 from "./assets/Picture1.jpg";
import Footer from "./components/footer";

function App() {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(false);

  const location = useLocation();
const toastShownRef = useRef(false); // Add a ref to track the toast

  useEffect(() => {
    // Only show toast if it hasn't been shown yet
    if (location.state?.message && !toastShownRef.current) {
      toast.success(location.state.message);
      toastShownRef.current = true; // Mark the toast as shown

      // Clear the location state to prevent it from re-showing on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]); // We can add location.state here

  // ✅ Local check for token only
  // const checkLocalToken = async () => {
  //   setIsChecking(true);

  //   const token = localStorage.getItem("token");

  //   // No token?
  //   if (!token) {
  //     console.log("No token found — navigating to /login");
  //     navigate("/login");
  //     setIsChecking(false);
  //     return;
  //   }

  //   try {
  //     // 🔥 Try validating token with backend
  //     const res = await fetch("https://iiai.onrender.com/api/auth/me", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     // Token expired or invalid
  //     if (res.status === 401) {
  //       console.warn("Token expired or invalid — removing it");
  //       localStorage.removeItem("token");
  //       navigate("/login");
  //     } else {
  //       console.log("Token valid — navigating to /blog");
  //       navigate("/blog");
  //     }
  //   } catch (err) {
  //     console.error("Error validating token:", err);
  //     localStorage.removeItem("token");
  //     navigate("/login");
  //   }

  //   setIsChecking(false);
  // };

  const handleReadMore = (path) => {
  setIsChecking(true);

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    setIsChecking(false);
    return;
  }

  fetch("https://iiai.onrender.com/api/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      if (res.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        navigate(path);        // 👈 redirect to the specific blog you choose
      }
    })
    .catch(() => {
      localStorage.removeItem("token");
      navigate("/login");
    })
    .finally(() => setIsChecking(false));
};


  return (
    <>
      <div className="min-vh-100 bg-dark text-white">
        <Topbar />
        <Navbar />
        <Header />

        {/* Blog Cards Section */}
        <div className="container py-5">
          <div className="row justify-content-start g-4">

            {/* Members Content */}
            <div className="col-12 col-md-6 col-lg-4">

              <div className="card h-100 d-flex flex-column" >
                <img src="https://picsum.photos/420/250?random=1" className="card-img-top" alt="React Hooks" style={{minHeight:"276px"}}/>
                <div className="card-body">
                  <h5 className="card-title text-dark">DAE, India Guidelines for Dosimetry</h5>
                  <p className="card-subtitle mb-0.5 text-dark">September, 2025</p>
                  <span
                    className="badge rounded-pill px-0"
                    style={{ backgroundColor: "#21252900", color: "#7f7f7f" }}
                  >
                    {/* <i className="fa-solid fa-lock"></i>*/} Member's Only 
                  </span>
                  <p className="card-text text-dark">
                    The Department of Atomic Energy (DAE), India has published dosimetry guidelines for accelerators....
                  </p>
                  <div className="mt-auto">
                  <button
                    onClick={()=>handleReadMore("/blog/2")}
                    className="btn btn-primary"
                    disabled={isChecking}
                  >
                    {isChecking ? "Read More" : "Read More"}
                  </button>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Members Content */}
            <div className="col-12 col-md-6 col-lg-4">

              <div className="card h-100 d-flex flex-column">
                <img src="https://picsum.photos/420/250?random=2" className="card-img-top" alt="React Hooks" style={{minHeight:"276px"}}/>
                <div className="card-body">
                  <h5 className="card-title text-dark fs-5">Development of Radiation Processing in India</h5>
                  <p className="card-subtitle mb-0.5 text-dark">October, 2025</p>
                  <span
                    className="badge rounded-pill px-0"
                    style={{ backgroundColor: "#21252900", color: "#7f7f7f" }}
                  >
                    {/* <i className="fa-solid fa-lock"></i>*/} Member's Only 
                  </span>
                  <p className="card-text text-dark">
                    This report outlines the progress and current state....
                  </p>
                  <div className="mt-auto">
                  <button
                    onClick={()=>handleReadMore("/blog/3")}
                    className="btn btn-primary"
                    disabled={isChecking}
                  >
                    {isChecking ? "Read More" : "Read More"}
                  </button>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Free Content */}
            <div className="col-12 col-md-6 col-lg-4">

              <div className="card h-100 d-flex flex-column">
                <img src={image1} className="card-img-top" alt="React Hooks" />
                <div className="card-body">
                  <h5 className="card-title text-dark">NICSTAR 2026</h5>
                  <p className="card-subtitle mb-0.5 text-dark">November, 2025</p>
                  <span
                    className="badge rounded-pill px-0"
                    style={{ backgroundColor: "#21252900", color: "#7f7f7f" }}
                  >
                    {/* <i className="fa-solid fa-lock"></i>*/} Free Access
                  </span>
                  <p className="card-text text-dark">
                    National Association for Application of Radioisotopes and
                    Radiation in Industry, Mumbai is organising....
                  </p>
                  <Link to="/blog/1">
                  <button
                    className="btn btn-primary"
                    disabled={isChecking}
                  >
                    {isChecking ? "Read More" : "Read More"}
                  </button></Link>
                </div>

                
              </div>
            </div>

            {/* Members Content */}
            <div className="col-12 col-md-6 col-lg-4">

              <div className="card h-100 d-flex flex-column">
                <img src="https://picsum.photos/420/250?random=3" className="card-img-top" alt="React Hooks" style={{minHeight:"276px"}}/>
                <div className="card-body">
                  <h5 className="card-title text-dark">Technical Exchange on Gamma Irradiator Security and alternative technologies</h5>
                  <p className="card-subtitle mb-0.5 text-dark">December, 2025</p>
                  <span
                    className="badge rounded-pill px-0"
                    style={{ backgroundColor: "#21252900", color: "#7f7f7f" }}
                  >
                    {/* <i className="fa-solid fa-lock"></i>*/} Member's Only 
                  </span>
                  <p className="card-text text-dark">
                    The IIAI is pleased to host a Technical Exchange being supported by International....
                  </p>
                  <div className="mt-auto">
                  <button
                    onClick={()=>handleReadMore("/blog/4")}
                    className="btn btn-primary"
                    disabled={isChecking}
                  >
                    {isChecking ? "Read More" : "Read More"}
                  </button>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Add more <div className="col-12 col-md-6 col-lg-4">...</div> here for other cards */}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;