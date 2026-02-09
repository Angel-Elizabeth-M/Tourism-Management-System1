import { Link } from "react-router-dom";

export default function Navbar() {
  // CHANGE ROLE HERE (Phase-1 simulation)
  const role = "admin"; // change to "user" when needed

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">
        Lunara
      </Link>

      <div className="navbar-nav ms-auto">
        {role === "admin" && (
          <>
            <Link className="nav-link" to="/admin">Dashboard</Link>
            <Link className="nav-link" to="/packages">Packages</Link>
            <Link className="nav-link" to="/bookings">Bookings</Link>
          
  
          </>
        )}

        {role === "user" && (
          <>
            <Link className="nav-link" to="/user">Home</Link>
            <Link className="nav-link" to="/packages">Packages</Link>
            <Link className="nav-link" to="/bookings">My Bookings</Link>
            <Link className="nav-link" to="/reviews">Reviews</Link>
          </>
        )}
      </div>
    </nav>
  );
}
