import { useEffect, useState } from "react";

export default function Dashboard() {
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
   
      reviews: JSON.parse(localStorage.getItem("reviews"))?.length || 0,
    });
  }, []);

  return (
    <div className="container mt-4">
      {/* Welcome Section */}
      <div className="dashboard-header mb-4">
        <h2>Welcome, Admin 👋</h2>
        <p>Tourism Management System Overview</p>
      </div>

      {/* Stats Cards */}
      <div className="row g-4">
        <div className="col-md-3">
          <div className="stat-card bg-primary">
            <h5>Total Packages</h5>
            <h2>{stats.packages}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card bg-success">
            <h5>Total Bookings</h5>
            <h2>{stats.bookings}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card bg-warning">
            <h5>Total Hotels</h5>
            <h2>{stats.hotels}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card bg-danger">
            <h5>Total Reviews</h5>
            <h2>{stats.reviews}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
