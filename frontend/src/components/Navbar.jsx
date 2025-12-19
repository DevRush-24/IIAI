import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../style.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
  useEffect(() => {
    const navbarWrapper = document.querySelector(".navbar-wrapper");

    // ✅ Start with max-width for smoother centering
    gsap.set(navbarWrapper, { maxWidth: "90%" });

    let expanded = false;

    const handleScroll = () => {
      const shouldExpand = window.scrollY > 50;

      if (shouldExpand !== expanded) {
        expanded = shouldExpand;
        gsap.to(navbarWrapper, {
          maxWidth: shouldExpand ? "100%" : "90%",
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Start */}
      <header
        className="sticky-top bg-dark"
        style={{ zIndex: 1000, width: "100%" }}
      >
        {/* Flex parent ensures centered animation without layout jump */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "100%" }}
        >
          <div className="navbar-wrapper position-relative w-100">
            <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4 shadow-sm">
              <a href="index.html" className="navbar-brand p-0">
                <img src={Logo} alt="Logo" height="75" />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="fa fa-bars"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                  <a href="https://www.iiai.org.in/" className="nav-item nav-link" target="_self">
                    Home
                  </a>

                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                       target="_self"
                    >
                      About us
                    </a>
                    <div className="dropdown-menu m-0">
                      <a href="https://www.iiai.org.in/about.html" className="dropdown-item">
                        Objectives
                      </a>
                      <a
                        href="https://www.iiai.org.in/Executive_Committee.html"
                        className="dropdown-item"
                         target="_self"
                      >
                        Executive Committee
                      </a>
                    </div>
                  </div>

                  <a href="https://www.iiai.org.in/Our_Members.html" className="nav-item nav-link"  target="_self">
                    IIAI Members
                  </a>

                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Activities
                    </a>
                    <div className="dropdown-menu m-0">
                      <a href="https://www.iiai.org.in/Announcement.html" className="dropdown-item" target="_self">
                        Announcement
                      </a>
                      <a href="https://www.iiai.org.in/Courses.html" className="dropdown-item" target="_self">
                        Certification Courses
                      </a>
                      <a href="/" className="dropdown-item active" target="_self">
                        News & Updates
                      </a>
                    </div>
                  </div>

                  <a href="https://www.iiai.org.in/contact.html" className="nav-item nav-link"  target="_self">
                    Contact
                  </a>
                </div>

                <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                  <button
                    className="btn btn-primary btn-md-square mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <i className="fas fa-search"></i>
                  </button>

                  <a
                    href="https://www.iiai.org.in/files/Annexure%2010%20-%20IIAI%20Membership%20Application.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0"
                  >
                    Become IIAI Member
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;
