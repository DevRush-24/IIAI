import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/footer";
import image1 from "../assets/Picture1.jpg";

function Blog4() {
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
    fetch("http://localhost:5001/api/secure-pdf/4", {
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
                <h1 className="fw-bold mb-3">Technical Exchange on Gamma Irradiator Security and alternative technologies</h1>

                <div className="d-flex align-items-center mb-4 text-muted small flex-wrap">
                  <span className="me-3">
                    <i className="fa-solid fa-user"></i> Admin
                  </span>
                  <span className="me-3">
                    <i className="fa-solid fa-calendar"></i> 12th October, 2025
                  </span>
                  <span><i className="fa-solid fa-tag"></i> Mumbai</span>
                </div>

                <img
                  src="https://picsum.photos/400/250?random=2"
                  alt="Blog Cover"
                  className="img-fluid rounded-3 mb-4 w-50"
                />

                <p className="lead text-secondary">
                 The IIAI is pleased to host a Technical Exchange being supported by International Irradiation Association (iia) and the World Institute for Nuclear Security (WINS). This meeting will be held immediately after the NICSTAR-2026 conference at the Westin Convention Centre, Powai, Mumbai, India.
                </p>

                <p>
                 India’s dynamic gamma irradiation sector continues to be the country’s leading technology and therefore strengthening security practices and exploring alternative approaches are essential for the future
                </p>

                <p>
                  This meeting is expected to bring together Indian and international experts to share experiences, exchange lessons learned and engage in Q&A sessions and panel discussions.
                </p>

                <p>
                  Participation is free of charge and open to Irradiator operators and suppliers, users of radioactive material, regulators, and anyone holding responsibilities or interest in the security of gamma irradiation facilities and in complementary technologies such as EB irradiation.
                </p>

                <ul>
                  <li>Flyer for the Technical Exchange…..(pdf version)</li>
                  <li>Technical Exchange details and registration is available at this link to the WINS website</li>
                </ul>

                <p>Further details about NICSTAR-2026 <a href="https://naarri.org/nicstar2026/">available here</a></p>

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

export default Blog4;
