import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/footer";
import image1 from "../assets/Picture1.jpg";

function Blog1() {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Wait for DOM and localStorage to be available
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      console.log("Token found:", token);

      if (!token || token === "undefined" || token === "null") {
        console.warn("No valid token found — redirecting to login");
        navigate("/login", { replace: true });
      }

      // Stop checking after first render
      setIsChecking(false);
    };

    checkAuth();
  }, [navigate]);

  // ⏳ Render nothing until token check is complete
  if (isChecking) {
    return (
      <div className="vh-100 bg-dark text-white d-flex justify-content-center align-items-center">
        <h4>Checking authentication...</h4>
      </div>
    );
  }

  return (
    <>
      <div className="min-vh-100 bg-dark text-white">
        <Topbar />
        <Navbar />
        <Header />

        {/* Blog Section */}
        <section className="container-fluid py-5">
          <div className="d-flex justify-content-center">
            <div
              className="bg-white text-dark p-4 p-md-5 rounded-3 shadow-sm"
              style={{
                maxWidth: "1200px",
                width: "95%",
              }}
            >
              <article>
                <h1 className="fw-bold mb-3">
                  NICSTAR 2026
                </h1>

                <div className="d-flex align-items-center mb-4 text-muted small flex-wrap">
                  <span className="me-3">
                    <i className="fa-solid fa-user"></i> Admin
                  </span>
                  <span className="me-3">
                    <i className="fa-solid fa-calendar"></i> 9 - 12 March 2026
                  </span>
                  <span>
                    <i className="fa-solid fa-tag"></i> Mumbai
                  </span>
                </div>

                <img
                  src={image1}
                  alt="AI and finance"
                  width={"50px"}
                  className="img-fluid rounded-3 mb-4 w-50"
                />

                <p className="lead text-secondary">
                  National Association for Application of Radioisotopes and Radiation in Industry (NAARRI), Mumbai is organising its 9th international conference NICSTAR 2026 during March 9-12, 2026, at Westin Convention Centre, Powai, Mumbai, India. 
                </p>

                <p>
                  The theme of the conference is “Radiation Applications: Diverse, Mature and Sustainable” and will focus on highlighting the key role being played by radiation technologies towards achieving zero hunger, better healthcare, clean water, clean environment and efficient industrial processes with impeccable safety and reliability.
                </p>

                {/* <h3 className="mt-4 mb-3 fw-semibold">
                  The Rise of Predictive Analytics
                </h3>

                <p>
                  Predictive analytics is enabling institutions to forecast
                  market trends with unprecedented accuracy. Machine learning
                  models analyze historical data to detect patterns that can
                  signal future opportunities or risks.
                </p>

                <blockquote className="blockquote bg-light border-start border-primary border-4 p-3 my-4 rounded-2">
                  <p className="mb-0">
                    “AI won’t replace financial experts — but it will
                    dramatically enhance their decision-making capabilities.”
                  </p>
                </blockquote>

                <p>
                  As regulations evolve, institutions must ensure AI tools
                  comply with ethical guidelines. The balance between innovation
                  and responsibility will define the future of intelligent
                  finance.
                </p> */}

                <a href="https://naarri.org/nicstar2026/">
                  Learn more about NICSTAR
                </a>

                <hr className="my-4" />

                {/* Author Box */}
                <div className="d-flex align-items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Author"
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="mb-1 fw-bold">NICSTAR 2026</h6>
                    <small className="text-muted">
                      Members Article, IIAI
                    </small>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Blog1;
