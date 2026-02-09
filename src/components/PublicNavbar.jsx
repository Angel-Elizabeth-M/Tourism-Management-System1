import { Link } from "react-router-dom";

export default function PublicNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">
        Lunara
      </Link>

      <div className="navbar-nav me-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/packages">Packages</Link>
        <Link className="nav-link" to="/about">About Us</Link>
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </div>

      <div className="navbar-nav">
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="btn btn-outline-light ms-2" to="/signup">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
