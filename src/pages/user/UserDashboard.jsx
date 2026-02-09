export default function UserDashboard() {
  return (
    <div className="container mt-4">
      <h2>Welcome to Tourism Management System</h2>
      <p className="text-muted">
        Explore tour packages, book trips, and share your experience
      </p>

      <div className="row g-4 mt-3">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Browse Packages</h5>
            <p>View available tour packages and destinations.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>My Bookings</h5>
            <p>View and manage your tour bookings.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Reviews & Ratings</h5>
            <p>Share your travel experience with others.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
