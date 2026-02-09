import { useEffect, useState } from "react";

/* ===== REVIEW SOURCES (MOVED OUTSIDE COMPONENT) ===== */
const reviewSources = [
  {
    key: "reviews-goa-romantic",
    packageName: "Romantic Beachfront Goa Retreat",
  },
  {
    key: "reviews-kerala-backwaters",
    packageName: "Kerala Backwaters Escape",
  },
  {
    key: "reviews-radisson-baga",
    packageName: "Radisson Resort Baga, Goa",
  },
];

export default function AdminReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let allReviews = [];

    reviewSources.forEach((source) => {
      const data =
        JSON.parse(localStorage.getItem(source.key)) || [];

      data.forEach((review, index) => {
        allReviews.push({
          ...review,
          packageName: source.packageName,
          sourceKey: source.key,
          index,
        });
      });
    });

    setReviews(allReviews);
  }, []); // ✅ NO ESLINT WARNING NOW

  const deleteReview = (sourceKey, index) => {
    const data =
      JSON.parse(localStorage.getItem(sourceKey)) || [];

    data.splice(index, 1);
    localStorage.setItem(sourceKey, JSON.stringify(data));

    setReviews(
      reviews.filter(
        (r) => !(r.sourceKey === sourceKey && r.index === index)
      )
    );
  };

  return (
    <div className="container mt-4 mb-5">
      <h2>Admin Reviews</h2>
      <p className="text-muted">
        View and manage customer reviews
      </p>

      {reviews.length === 0 ? (
        <p className="text-muted">No reviews available.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Package</th>
              <th>Customer</th>
              <th>Rating</th>
              <th>Review</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((r, i) => (
              <tr key={i}>
                <td>{r.packageName}</td>
                <td>{r.name}</td>
                <td>⭐ {r.rating}</td>
                <td>{r.comment}</td>
                <td>{r.date}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      deleteReview(r.sourceKey, r.index)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}