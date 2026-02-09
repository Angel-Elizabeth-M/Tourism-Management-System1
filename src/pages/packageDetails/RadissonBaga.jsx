import "./PackageDetails.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PackageDetails() {
  const navigate = useNavigate();
  const packagePrice = 24924; // Radisson package price

  const hotels = [
    {
      name: "Radisson Resort Baga, Goa",
      price: 6200,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      google:
        "https://www.google.com/search?q=Radisson+Resort+Baga+Goa",
    },
    {
      name: "Novotel Goa Resort & Spa",
      price: 5800,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      google:
        "https://www.google.com/search?q=Novotel+Goa+Resort",
    },
    {
      name: "Marriott Resort & Spa Goa",
      price: 6600,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      google:
        "https://www.google.com/search?q=Marriott+Resort+Goa",
    },
    {
      name: "Taj Holiday Village Resort",
      price: 7200,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      google:
        "https://www.google.com/search?q=Taj+Holiday+Village+Goa",
    },
    {
      name: "Park Regis Goa",
      price: 5400,
      image:
        "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d7",
      google:
        "https://www.google.com/search?q=Park+Regis+Goa",
    },
  ];

  /* ================= REVIEWS (ONLY ADDITION) ================= */
  const reviewKey = "reviews-radisson-baga";

  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({
    name: "",
    rating: "5",
    comment: "",
  });

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem(reviewKey)) || [];
    setReviews(saved);
  }, []);

  const submitReview = () => {
    if (!review.name || !review.comment) {
      alert("Please fill all review fields");
      return;
    }

    const newReview = {
      ...review,
      date: new Date().toLocaleDateString(),
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(
      reviewKey,
      JSON.stringify(updatedReviews)
    );

    setReview({ name: "", rating: "5", comment: "" });
  };

  return (
    <div className="container mt-4 mb-5">

      {/* ===== YOUR ORIGINAL CONTENT (UNCHANGED) ===== */}

      <div className="package-hero mb-4">
        <h2>Radisson Resort Baga, Goa</h2>
        <span className="badge bg-primary">3 Nights / 4 Days</span>
        <p className="text-muted mt-2">
          Enjoy a premium stay at Radisson Resort Baga with vibrant beaches,
          nightlife experiences, luxury resorts, and curated sightseeing.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="detail-card">
            <h5>🚗 Transportation</h5>
            <ul>
              <li>Flights / Trains / Buses (optional)</li>
              <li>Airport ↔ Hotel transfers</li>
              <li>Local sightseeing travel</li>
            </ul>
          </div>

          <div className="detail-card">
            <h5>🏨 Accommodation</h5>
            <ul>
              <li>4★ / 5★ Luxury Resorts</li>
              <li>3 Nights stay</li>
              <li>Deluxe / Superior rooms</li>
            </ul>
          </div>

          <div className="detail-card">
            <h5>🍽 Meals</h5>
            <ul>
              <li>Daily breakfast included</li>
              <li>Lunch / Dinner (MAP / AP plans)</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="detail-card">
            <h5>🎡 Sightseeing & Activities</h5>
            <ul>
              <li>Baga & Calangute beach visits</li>
              <li>Dolphin cruise & nightlife tour</li>
              <li>Shopping & cultural experiences</li>
            </ul>
          </div>

          <div className="detail-card">
            <h5>🧑‍✈️ Tour Guide / Escort</h5>
            <ul>
              <li>Professional local guide</li>
              <li>Tour manager for group tours</li>
            </ul>
          </div>

          <div className="detail-card">
            <h5>💰 Taxes & Service Charges</h5>
            <ul>
              <li>GST included</li>
              <li>Hotel & service charges included</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="detail-card mt-4">
        <h5>📅 Itinerary (Travel Plan)</h5>
        <ol className="itinerary">
          <li><strong>Day 1:</strong> Arrival & leisure at resort</li>
          <li><strong>Day 2:</strong> North Goa sightseeing</li>
          <li><strong>Day 3:</strong> Beach activities & shopping</li>
          <li><strong>Day 4:</strong> Departure</li>
        </ol>
      </div>

      <h4 className="mt-5 mb-3">🏨 Available Hotels (Choose One)</h4>

      <div className="row g-4">
        {hotels.map((hotel, index) => (
          <div key={index} className="col-md-4">
            <div className="hotel-card">
              <div className="hotel-image">
                <img src={hotel.image} alt={hotel.name} />
                <span className="hotel-tag">4★ / 5★ Hotel</span>
              </div>

              <div className="p-3">
                <h6>{hotel.name}</h6>
                <p className="hotel-price">₹{hotel.price}</p>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() =>
                      navigate("/payment", {
                        state: {
                          packageName: "Radisson Resort Baga, Goa",
                          packagePrice,
                          hotelName: hotel.name,
                          hotelPrice: hotel.price,
                        },
                      })
                    }
                  >
                    Select Hotel
                  </button>

                  <a
                    href={hotel.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    View on Google
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== REVIEWS SECTION (ONLY ADDITION) ===== */}
      <h4 className="mt-5 mb-3">⭐ Customer Reviews</h4>

      <div className="card p-3 mb-4">
        <input
          className="form-control mb-2"
          placeholder="Your Name"
          value={review.name}
          onChange={(e) =>
            setReview({ ...review, name: e.target.value })
          }
        />

        <select
          className="form-select mb-2"
          value={review.rating}
          onChange={(e) =>
            setReview({ ...review, rating: e.target.value })
          }
        >
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        <textarea
          className="form-control mb-2"
          placeholder="Write your experience..."
          value={review.comment}
          onChange={(e) =>
            setReview({ ...review, comment: e.target.value })
          }
        />

        <button className="btn btn-success" onClick={submitReview}>
          Submit Review
        </button>
      </div>

      {reviews.length === 0 ? (
        <p className="text-muted">No reviews yet.</p>
      ) : (
        reviews.map((r, i) => (
          <div key={i} className="review-card mb-2">
            <strong>{r.name}</strong> ⭐{r.rating}
            <p>{r.comment}</p>
            <small className="text-muted">{r.date}</small>
          </div>
        ))
      )}

    </div>
  );
}