import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  // ✅ Local check for token only
  const checkLocalToken = async () => {
  setIsChecking(true);

  const token = localStorage.getItem("token");

  // No token?
  if (!token) {
    console.log("No token found — navigating to /login");
    navigate("/login");
    setIsChecking(false);
    return;
  }

  try {
    // 🔥 Try validating token with backend
    const res = await fetch("http://localhost:5001/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Token expired or invalid
    if (res.status === 401) {
      console.warn("Token expired or invalid — removing it");
      localStorage.removeItem("token");
      navigate("/login");
    } else {
      console.log("Token valid — navigating to /blog");
      navigate("/blog");
    }
  } catch (err) {
    console.error("Error validating token:", err);
    localStorage.removeItem("token");
    navigate("/login");
  }

  setIsChecking(false);
};


  const handleReadMore = () => {
    checkLocalToken();
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
          {/* Card 1 */}
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <div className="card" style={{ width: "25rem" }}>
              <img src={image1} className="card-img-top" alt="React Hooks" />
              <div className="card-body">
                <h5 className="card-title text-dark">NICSTAR 2026</h5>
                <span class="badge rounded-pill px-0" style={{backgroundColor: "#21252900", color: '#7f7f7f'}}><i class="fa-solid fa-lock"></i> Member's Only</span>
                <p className="card-text text-dark">
                  National Association for Application of Radioisotopes and Radiation in Industry, Mumbai is organising....
                </p>
                <button
                  onClick={handleReadMore}
                  className="btn btn-primary"
                  disabled={isChecking}
                >
                  {isChecking ? "Checking..." : "Read More"}
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
