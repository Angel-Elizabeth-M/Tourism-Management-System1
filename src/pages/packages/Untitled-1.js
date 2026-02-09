import { useState } from "react";
import "./Packages.css";

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
  },
];

export default function Packages() {
  const [search, setSearch] = useState("");

  const filteredPackages = allPackages.filter(
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

                    <button className="btn btn-primary">
                      <a
  href="/package/goa-romantic"
  className="btn btn-primary"
>


  
  Book this Package
</a>

                    </button>
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



        <Route
          path="/admin/reviews"
          element={
            <>
              <Navbar />
              <Reviews />
            </>
          }
        /> 

      </Routes>



      import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    packages: 0,
    bookings: 0,
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
      <h2>Admin Dashboard</h2>
      <p className="text-muted">
        System overview and management
      </p>

      {/* ACTION BUTTONS */}
      <div className="mb-4">
        <Link
          to="/admin/add-package"
          className="btn btn-primary"
        >
          Add Package
        </Link>
      </div>

      {/* STAT CARDS */}
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
        
        <div className="col-md-3">
          <div className="stat-card bg-danger text-white p-3 rounded">
            Reviews
            <h3>{stats.reviews}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}





  /*<Route
          path="/user/bookings"
          element={
            <>
              <Navbar />
              <Bookings />
            </>
          }
        />*/




        import { useState } from "react";
import "./Packages.css";

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

  const filteredPackages = allPackages.filter(
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

                    {/* ✅ CORRECT BUTTON LINK */}
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
