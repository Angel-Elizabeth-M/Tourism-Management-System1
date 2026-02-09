import { useState, useEffect } from "react";
import "./Packages.css";

/* ================= HARDCODED PACKAGES ================= */
const allPackages = [
  {
    id: 1,
    title: "Romantic Beachfront Goa Retreat",
    nights: "4N / 5D",
    location: "Goa",
    hotel: "3 Star Hotel",
    meals: "Selected Meals",
    transfer: "Airport Pickup & Drop",
    price: 8016,
    total: 16032,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    tag: "Premium",
    link: "/package/goa-romantic",
  },
  {
    id: 2,
    title: "Radisson Resort Baga, Goa",
    nights: "3N / 4D",
    location: "Goa",
    hotel: "4 Star Hotel",
    meals: "Selected Meals",
    transfer: "Airport Pickup & Drop",
    price: 12462,
    total: 24924,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    tag: "Deal of the Day",
    link: "/package/radisson-baga",
  },
  {
    id: 3,
    title: "Kerala Backwaters Escape",
    nights: "4N / 5D",
    location: "Kerala",
    hotel: "Houseboat Stay",
    meals: "Breakfast & Dinner",
    transfer: "All Transfers Included",
    price: 10200,
    total: 20400,
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    tag: "Popular",
    link: "/package/kerala-backwaters",
  },
];

export default function Packages() {
  const [search, setSearch] = useState("");
  const [adminPackages, setAdminPackages] = useState([]);

  /* ================= LOAD ADMIN PACKAGES ================= */
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("packages")) || [];
    setAdminPackages(stored);
  }, []);

  /* ================= MERGE BOTH ================= */
  const combinedPackages = [
    ...allPackages,
    ...adminPackages.map((p) => ({
      ...p,
      total: p.price * 2 || p.price,
      link: `/package/${p.id}`, // dynamic link
      hotel: p.category || "Standard Hotel",
      meals: "Selected Meals",
      transfer: "All Transfers Included",
    })),
  ];

  /* ================= SEARCH ================= */
  const filteredPackages = combinedPackages.filter(
    (pkg) =>
      pkg.title.toLowerCase().includes(search.toLowerCase()) ||
      pkg.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">

      {/* HEADER */}
      <h2 className="mb-1">Tour Packages</h2>
      <p className="text-muted mb-3">
        Handpicked holiday packages with best prices
      </p>

      {/* SEARCH BAR */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by destination or package name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* PACKAGES LIST */}
      <div className="row g-4">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg) => (
            <div key={pkg.id} className="col-md-6">
              <div className="package-card">

                {/* IMAGE */}
                <div className="image-wrapper">
                  <img src={pkg.image} alt={pkg.title} />
                  <span className="tag">{pkg.tag}</span>
                  <span className="duration">{pkg.nights}</span>
                </div>

                {/* CONTENT */}
                <div className="content p-3">
                  <h5>{pkg.title}</h5>
                  <p className="text-muted">{pkg.location}</p>

                  <ul className="features">
                    <li>🏨 {pkg.hotel}</li>
                    <li>🍽 {pkg.meals}</li>
                    <li>🚗 {pkg.transfer}</li>
                  </ul>

                  <div className="price-box">
                    <div>
                      <span className="price">₹{pkg.price}</span>
                      <span className="per"> / person</span>
                      <p className="total">
                        Total Price ₹{pkg.total}
                      </p>
                    </div>

                    <a href={pkg.link} className="btn btn-primary">
                      Book this Package
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">
            No packages found
          </p>
        )}
      </div>

    </div>
  );
}