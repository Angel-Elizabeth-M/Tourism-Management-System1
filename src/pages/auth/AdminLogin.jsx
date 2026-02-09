import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Admin Login</h3>

      <input
        className="form-control mb-2"
        placeholder="Admin Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-2"
        placeholder="Admin Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-danger w-100" onClick={handleAdminLogin}>
        Login as Admin
      </button>
    </div>
  );
}