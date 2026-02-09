import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            Discover Your Next <span>Dream Destination</span>
          </h1>

          <p>
            Curated tour packages, premium stays, and unforgettable
            travel experiences — all in one place.
          </p>

          <div className="hero-buttons">
            <Link to="/packages" className="btn btn-primary">
              Explore Packages
            </Link>

            <Link to="/login" className="btn btn-outline-light">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="container features-section">
        <h2 className="text-center mb-4">Why Travel With Us?</h2>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="feature-card">
              <h4>🌍 Handpicked Destinations</h4>
              <p>Carefully curated destinations for every type of traveler.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="feature-card">
              <h4>🏨 Premium Stays</h4>
              <p>Best hotels and resorts with comfort and luxury guaranteed.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="feature-card">
              <h4>💰 Best Price Guarantee</h4>
              <p>Transparent pricing with exciting offers and discounts.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="feature-card">
              <h4>📞 24/7 Support</h4>
              <p>Dedicated customer support throughout your journey.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="cta-section">
        <h2>Ready to Travel?</h2>
        <p>
          Start planning your next holiday with our exclusive tour packages.
        </p>

        <Link to="/packages" className="btn btn-light">
          Book Your Trip Now
        </Link>
      </div>

    </div>
  );
}