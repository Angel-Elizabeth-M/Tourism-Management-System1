import { useLocation, useNavigate } from "react-router-dom";
import "./Receipt.css";

export default function Receipt() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="container mt-5 text-center">
        <h4>No receipt data found</h4>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    );
  }

  const {
    bookingId,
    name,
    email,
    phone,
    packageName,
    hotelName,
    packagePrice,
    hotelPrice,
    gst,
    totalAmount,
    paymentMethod,
  } = state;

  return (
    <div className="container mt-5 mb-5 receipt-container">

      <div className="receipt-card">
        <h2 className="text-center mb-3">Booking Receipt</h2>
        <p className="text-center text-success">
          ✔ Payment Successful
        </p>

        <hr />

        <h5>Customer Details</h5>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>

        <hr />

        <h5>Booking Details</h5>
        <p><strong>Booking ID:</strong> {bookingId}</p>
        <p><strong>Package:</strong> {packageName}</p>
        <p><strong>Hotel:</strong> {hotelName}</p>

        <hr />

        <h5>Payment Summary</h5>
        <p>Package Price: ₹{packagePrice}</p>
        <p>Hotel Price: ₹{hotelPrice}</p>
        <p>GST: ₹{gst}</p>
        <h6>Total Paid: ₹{totalAmount}</h6>

        <p><strong>Payment Method:</strong> {paymentMethod}</p>

        <hr />

        <div className="text-center">
          <button
            className="btn btn-outline-primary"
            onClick={() => window.print()}
          >
            Download / Print Receipt
          </button>

          <button
  className="btn btn-success ms-3"
  onClick={() => navigate("/bookings")}
>
  View My Bookings
</button>
        </div>
      </div>

    </div>
  );
}