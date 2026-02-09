import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Payment.css";

export default function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    packageName,
    packagePrice,
    hotelName,
    hotelPrice,
  } = state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [persons, setPersons] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const gst = Math.round((packagePrice + hotelPrice) * 0.05);
  const totalAmount = packagePrice + hotelPrice + gst;

  const confirmPayment = () => {
    if (!name || !email || !phone) {
      alert("Please fill all customer details");
      return;
    }

    const bookingId =
      "BOOK" + Math.floor(100000 + Math.random() * 900000);

    const booking = {
      bookingId,
      name,
      email,
      phone,
      persons,
      paymentMethod,
      packageName,
      hotelName,
      packagePrice,
      hotelPrice,
      gst,
      totalAmount,
      status: "Confirmed",
    };

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, booking])
    );

    // ✅ REDIRECT TO RECEIPT PAGE WITH DATA
    navigate("/receipt", {
      state: booking,
    });
  };

  return (
    <div className="container mt-4 mb-5">
      <h2>Payment & Booking</h2>

      {/* BOOKING SUMMARY */}
      <div className="card p-3 mb-3">
        <h5>Booking Summary</h5>
        <p><strong>Package:</strong> {packageName}</p>
        <p><strong>Hotel:</strong> {hotelName}</p>
        <p>Package Price: ₹{packagePrice}</p>
        <p>Hotel Price: ₹{hotelPrice}</p>
        <p>GST (5%): ₹{gst}</p>
        <h6>Total Payable: ₹{totalAmount}</h6>
      </div>

      {/* CUSTOMER DETAILS */}
      <div className="card p-3 mb-3">
        <h5>Customer Details</h5>

        <input
          className="form-control mb-2"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="number"
          className="form-control mb-2"
          min="1"
          value={persons}
          onChange={(e) => setPersons(e.target.value)}
        />
      </div>

      {/* PAYMENT METHOD */}
      <div className="card p-3 mb-3">
        <h5>Payment Method</h5>

        <select
          className="form-select"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option>UPI</option>
          <option>Credit / Debit Card</option>
          <option>Net Banking</option>
          <option>Cash on Arrival</option>
        </select>
      </div>

      {/* CONFIRM */}
      <button
        className="btn btn-success w-100"
        onClick={confirmPayment}
      >
        Confirm & Pay ₹{totalAmount}
      </button>
    </div>
  );
}