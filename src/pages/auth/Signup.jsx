import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleSignup = () => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("currentUser", JSON.stringify(form));
    navigate("/");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>User Signup</h3>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          className="form-control mb-2"
          placeholder={key.toUpperCase()}
          type={key === "password" ? "password" : "text"}
          onChange={(e) =>
            setForm({ ...form, [key]: e.target.value })
          }
        />
      ))}

      <button className="btn btn-success w-100" onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
}