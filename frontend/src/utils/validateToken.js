export async function validateToken() {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const res = await fetch("http://localhost:5001/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // If token expired OR invalid (signature / malformed)
    if (res.status === 401) {
      localStorage.removeItem("token");
      return false;
    }

    return true; // token valid
  } catch (err) {
    console.error("Token validation failed:", err);
    localStorage.removeItem("token");
    return false;
  }
}
