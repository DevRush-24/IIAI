import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/footer";
import image1 from "../assets/Picture1.jpg";

function Blog2() {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);
  const [pdfUrl, setPdfUrl] = useState(null);

  // ✔ 1. CHECK AUTH
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token || token === "undefined" || token === "null") {
      navigate("/login", { replace: true });
    } else {
      setIsChecking(false);
    }
  }, [navigate]);

  // ✔ 2. LOAD PDF — NO PARAMS — JUST HARDCODE NAME
  useEffect(() => {
    if (isChecking) return;

    const token = localStorage.getItem("token");

    // VERY SIMPLE VERSION — NO ID — JUST FILE NAME
    fetch("http://localhost:5001/api/secure-pdf/2", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      })
      .catch((err) => console.error("PDF Load Error:", err));
  }, [isChecking]);

  useEffect(() => {
  const handleContextMenu = (e) => e.preventDefault();
  document.addEventListener("contextmenu", handleContextMenu);

  return () => {
    document.removeEventListener("contextmenu", handleContextMenu);
  };
}, []);

  // Loading screen during auth
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

        <section className="container-fluid py-5">
          <div className="d-flex justify-content-center">
            <div
              className="bg-white text-dark p-4 p-md-5 rounded-3 shadow-sm"
              style={{ maxWidth: "1200px", width: "95%" }}
            >
              <article>
                <h1 className="fw-bold mb-3">DAE, India Guidelines for Dosimetry</h1>

                <div className="d-flex align-items-center mb-4 text-muted small flex-wrap">
                  <span className="me-3">
                    <i className="fa-solid fa-user"></i> Admin
                  </span>
                  <span className="me-3">
                    <i className="fa-solid fa-calendar"></i> 19th September, 2025
                  </span>
                  <span><i className="fa-solid fa-tag"></i> Mumbai</span>
                </div>

                <img
                  src="https://picsum.photos/400/250?random=2"
                  alt="Blog Cover"
                  className="img-fluid rounded-3 mb-4 w-50"
                />

                <p className="lead text-secondary">
                  The Department of Atomic Energy (DAE), India has published dosimetry guidelines for accelerators: “Standard Practice for Dosimetry in Electron Beam and X-ray Facility for Radiation Processing of Food & Allied Products”
                </p>

                <p>
                  Precise dose delivery is essential to maintain sterility assurance levels. The DAE has published guidelines for ease of operations. Uniform dose distribution is a critical parameter in radiation sterilisation to ensure all regions of a product receive the minimum effective dose required for microbial inactivation.
                </p>

                <p>
                  Further details are available here <a href="https://dae.gov.in/acts-rules/">https://dae.gov.in/acts-rules/</a>
                </p>

                {/* Secure PDF */}
                <div className="mt-4 position-relative">
                  {pdfUrl ? (
                    <>
                      <iframe
                        src={`${pdfUrl}#toolbar=0`}
                        title="Secure PDF"
                        style={{
                          width: "100%",
                          height: "800px",
                          border: "1px solid #ccc",
                        }}
                      ></iframe>

                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          right: "0px",
                          // width: "100%",
                          // height: "100%",
                          background: "transparent",
                          pointerEvents: "auto",
                        }}
                      ></div>
                    </>
                  ) : (
                    <div className="text-center py-5">
                      <div className="spinner-border text-primary"></div>
                      <p className="mt-3 text-muted">Loading document...</p>
                    </div>
                  )}
                </div>

                <hr className="my-4" />

                <div className="d-flex align-items-center">
                  <img
                    src="https://icons.veryicon.com/png/o/object/material-design-icons/lock-76.png"
                    alt="Lock"
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="mb-1 fw-bold">Member-Only Content:</h6>
                    <small className="text-muted">
                      Please note that this material is confidential and exclusively for members. Do not copy, share, or distribute this content outside your account.
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

export default Blog2;
