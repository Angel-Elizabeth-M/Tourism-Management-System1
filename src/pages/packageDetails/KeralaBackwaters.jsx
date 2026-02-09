import "./PackageDetails.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function KeralaBackwaters() {
  const navigate = useNavigate();
  const packagePrice = 20400;

  const hotels = [
    {
      name: "Alleppey Houseboat Deluxe",
      price: 4800,
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      google:
        "https://www.google.com/search?q=Alleppey+Houseboat+Deluxe",
    },
    {
      name: "Kumarakom Lake Resort",
      price: 6200,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      google:
        "https://www.google.com/search?q=Kumarakom+Lake+Resort",
    },
    {
      name: "Marari Beach Resort",
      price: 5600,
      image:
        "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d7",
      google:
        "https://www.google.com/search?q=Marari+Beach+Resort",
    },
    {
      name: "Spice Village Thekkady",
      price: 5000,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      google:
        "https://www.google.com/search?q=Spice+Village+Thekkady",
    },
    {
      name: "Vythiri Resort Wayanad",
      price: 5900,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      google:
        "https://www.google.com/search?q=Vythiri+Resort+Wayanad",
    },
  ];

  /* ================= REVIEWS (ADDED ONLY) ================= */
  const reviewKey = "reviews-kerala-backwaters";

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
        <h2>Kerala Backwaters Escape</h2>
        <span className="badge bg-primary">4 Nights / 5 Days</span>
        <p className="text-muted mt-2">
          Relax amidst Kerala’s serene backwaters, lush greenery, houseboat
          cruises, and authentic cultural experiences.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="detail-card">
            <h5>🚗 Transportation</h5>
            <ul>
              <li>Airport / Railway transfers</li>
              <li>Private cab for sightseeing</li>
              <li>Houseboat cruise transfers</li>
            </ul>
          </div>

          <div className="detail-card">
            <h5>🏨 Accommodation</h5>
            <ul>
              <li>Premium Houseboats & Resorts</li>
              <li>4 Nights stay</li>
              <li>Lake / Forest view rooms</li>
            </ul>
          </div>

          <div className="detail-card">
            <h5>🍽 Meals</h5>
            <ul>
              <li>Breakfast & Dinner included</li>
              <li>Traditional Kerala cuisine</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="detail-card">
            <h5>🎡 Sightseeing & Activities</h5>
            <ul>
              <li>Backwater houseboat cruise</li>
              <li>Tea plantation visits</li>
              <li>Ayurvedic spa experience</li>
            </ul>
          </div>

          <div className="detail-card">
            <h5>🧑‍✈️ Tour Guide / Escort</h5>
            <ul>
              <li>Experienced local guide</li>
              <li>On-call tour coordinator</li>
            </ul>
          </div>

          <div className="detail-card">
            <h5>💰 Taxes & Service Charges</h5>
            <ul>
              <li>GST included</li>
              <li>All hotel & service taxes included</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="detail-card mt-4">
        <h5>📅 Itinerary (Travel Plan)</h5>
        <ol className="itinerary">
          <li><strong>Day 1:</strong> Arrival & Alleppey backwaters</li>
          <li><strong>Day 2:</strong> Houseboat cruise</li>
          <li><strong>Day 3:</strong> Kumarakom sightseeing</li>
          <li><strong>Day 4:</strong> Wayanad / Thekkady visit</li>
          <li><strong>Day 5:</strong> Departure</li>
        </ol>
      </div>

      <h4 className="mt-5 mb-3">🏨 Available Hotels (Choose One)</h4>

      <div className="row g-4">
        {hotels.map((hotel, index) => (
          <div key={index} className="col-md-4">
            <div className="hotel-card">
              <div className="hotel-image">
                <img src={hotel.image} alt={hotel.name} />
                <span className="hotel-tag">Premium Stay</span>
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
                          packageName: "Kerala Backwaters Escape",
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