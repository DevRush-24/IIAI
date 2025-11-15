import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/footer";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5001/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Topbar />
    <Navbar />
      <div className="d-flex flex-column min-vh-100 bg-dark"> {/* Added bg-dark here */}
        <div className="container flex-grow-1 d-flex justify-content-center align-items-center py-5">
          {/* Main card container with two columns */}
          <div
            className="card shadow-lg border-0 d-flex flex-row overflow-hidden" // Use flex-row and overflow-hidden
            style={{ width: "60rem", maxWidth: "90%", borderRadius: "1rem" }} // Adjusted width for two columns
          >
            {/* Left Column (Login Form) */}
            <div className="col-lg-6 col-md-12 p-4 p-md-5"> {/* Takes half width on large screens */}
              <h3 className="text-center mb-4">Welcome Back!</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i
                        className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                      ></i>
                    </button>
                  </div>
                </div>

                <div className="d-flex justify-content-end mb-3">
                  <Link
                    to="/forgot-password"
                    className="text-decoration-none small"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {error && (
                  <div className="alert alert-danger py-2" role="alert">
                    {error}
                  </div>
                )}

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        <span className="ms-2">Logging in...</span>
                      </>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>

              <hr className="my-4" />
              <div className="text-center">
                <p className="small">
                  Don't have an account?{" "}
                  <Link to="/signup" className="fw-bold">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>

            {/* Right Column (Image Section) */}
            <div 
              className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center p-0" // Hide on smaller screens
              style={{ backgroundColor: '#f0f2f5' }} // A slightly different background for the image section if desired
            >
              {/* This is where your image will go */}
              <img
                src="https://via.placeholder.com/600x800/d3d3d3/000000?text=Your+Login+Image" // Replace with your actual image path
                alt="Login Illustration"
                className="img-fluid h-100 w-100 object-fit-cover" // Ensures image covers the space
                style={{ borderRadius: "0 1rem 1rem 0" }} // Matches the card's border-radius on the right
              />
              {/* Or if you want a custom image description: */}
              {/* <div className="text-center text-secondary p-4">
                <h4>Empower Your Journey</h4>
                <p>Access your personalized dashboard and explore new features.</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;