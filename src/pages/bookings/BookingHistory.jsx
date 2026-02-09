import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  if (bookings.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h4>No bookings found</h4>
        <p>Please book a package to see details here.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <h2>My Bookings</h2>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Booking ID</th>
            <th>Package</th>
            <th>Hotel</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b, index) => (
            <tr key={index}>
              <td>{b.bookingId}</td>
              <td>{b.packageName}</td>
              <td>{b.hotelName}</td>
              <td>₹{b.totalAmount}</td>
              <td>
                <span className="badge bg-success">
                  {b.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    navigate("/receipt", { state: b })
                  }
                >
                  View Receipt
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}