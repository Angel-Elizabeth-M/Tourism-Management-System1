import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    packages: 0,
    bookings: 0,
    hotels: 0,
    reviews: 0,
  });

  useEffect(() => {
    setStats({
      packages: JSON.parse(localStorage.getItem("packages"))?.length || 0,
      bookings: JSON.parse(localStorage.getItem("bookings"))?.length || 0,
      hotels: JSON.parse(localStorage.getItem("hotels"))?.length || 0,
      reviews:
        (JSON.parse(localStorage.getItem("reviews-goa-romantic"))?.length || 0) +
        (JSON.parse(localStorage.getItem("reviews-kerala-backwaters"))?.length || 0) +
        (JSON.parse(localStorage.getItem("reviews-radisson-baga"))?.length || 0),
    });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <p className="text-muted">System overview and management</p>

      {/* ===== STAT CARDS ===== */}
      <div className="row g-4">
        <div className="col-md-3">
          <div className="stat-card bg-primary text-white p-3 rounded">
            Packages
            <h3>{stats.packages}</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card bg-success text-white p-3 rounded">
            Bookings
            <h3>{stats.bookings}</h3>
          </div>
        </div>

        {/*<div className="col-md-3">
          <div className="stat-card bg-warning text-dark p-3 rounded">
            Hotels
            <h3>{stats.hotels}</h3>
          </div>
        </div>*/}

        <div className="col-md-3">
          <div className="stat-card bg-danger text-white p-3 rounded">
            Reviews
            <h3>{stats.reviews}</h3>
          </div>
        </div>
      </div>

      {/* ===== ADMIN ACTION BUTTONS ===== */}
      <div className="mt-4 d-flex gap-3">
        <Link to="/admin/add-package" className="btn btn-primary">
          Add Package
        </Link>

        <Link to="/admin/reviews" className="btn btn-warning">
          Manage Reviews
        </Link>
      </div>
    </div>
  );
}