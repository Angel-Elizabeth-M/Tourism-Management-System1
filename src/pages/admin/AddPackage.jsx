import { useEffect, useState } from "react";

export default function AddPackage() {

  const emptyForm = {
    title: "",
    location: "",
    nights: "",
    category: "",
    price: "",
    description: "",
    image: "",
    googleLink: "",
    tag: "",
    hotels: [
      { name: "", price: "", image: "", google: "" },
      { name: "", price: "", image: "", google: "" },
      { name: "", price: "", image: "", google: "" },
    ],
  };

  const [form, setForm] = useState(emptyForm);
  const [packages, setPackages] = useState([]);
  const [editId, setEditId] = useState(null);

  /* LOAD EXISTING PACKAGES */
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("packages")) || [];
    setPackages(stored);
  }, []);

  /* HANDLE PACKAGE FIELDS */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* HANDLE HOTEL FIELDS */
  const handleHotelChange = (index, field, value) => {
    const updatedHotels = [...form.hotels];
    updatedHotels[index][field] = value;
    setForm({ ...form, hotels: updatedHotels });
  };

  /* ADD / UPDATE PACKAGE */
  const savePackage = () => {
    if (!form.title || !form.location || !form.price) {
      alert("Please fill required fields");
      return;
    }

    let updatedPackages;

    if (editId === null) {
      const newPackage = {
        id: Date.now(),
        ...form,
        price: Number(form.price),
        tag: form.tag || "New",
      };
      updatedPackages = [...packages, newPackage];
    } else {
      updatedPackages = packages.map((p) =>
        p.id === editId ? { ...form, id: editId } : p
      );
      setEditId(null);
    }

    setPackages(updatedPackages);
    localStorage.setItem(
      "packages",
      JSON.stringify(updatedPackages)
    );

    setForm(emptyForm);
  };

  /* EDIT */
  const editPackage = (pkg) => {
    setForm(pkg);
    setEditId(pkg.id);
  };

  /* DELETE */
  const deletePackage = (id) => {
    if (!window.confirm("Delete this package?")) return;

    const updated = packages.filter((p) => p.id !== id);
    setPackages(updated);
    localStorage.setItem(
      "packages",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="container mt-4 mb-5">
      <h3>Manage Tour Packages</h3>

      {/* PACKAGE FORM */}
      <div className="card p-3 mb-4">
        <h5>{editId ? "Edit Package" : "Add Package"}</h5>

        <input className="form-control mb-2" name="title" placeholder="Package Title" value={form.title} onChange={handleChange} />
        <input className="form-control mb-2" name="location" placeholder="Location" value={form.location} onChange={handleChange} />
        <input className="form-control mb-2" name="nights" placeholder="Duration (4N / 5D)" value={form.nights} onChange={handleChange} />
        <input className="form-control mb-2" name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <input type="number" className="form-control mb-2" name="price" placeholder="Package Price" value={form.price} onChange={handleChange} />
        <textarea className="form-control mb-2" name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input className="form-control mb-2" name="image" placeholder="Package Image URL" value={form.image} onChange={handleChange} />
        <input className="form-control mb-3" name="tag" placeholder="Tag (Popular / Premium)" value={form.tag} onChange={handleChange} />

        {/* HOTELS SECTION */}
        <h6 className="mt-3">Hotels Included</h6>

        {form.hotels.map((hotel, index) => (
          <div key={index} className="border p-2 mb-2 rounded">
            <strong>Hotel {index + 1}</strong>
            <input className="form-control mb-1" placeholder="Hotel Name" value={hotel.name} onChange={(e) => handleHotelChange(index, "name", e.target.value)} />
            <input type="number" className="form-control mb-1" placeholder="Hotel Price" value={hotel.price} onChange={(e) => handleHotelChange(index, "price", e.target.value)} />
            <input className="form-control mb-1" placeholder="Hotel Image URL" value={hotel.image} onChange={(e) => handleHotelChange(index, "image", e.target.value)} />
            <input className="form-control" placeholder="Google Link" value={hotel.google} onChange={(e) => handleHotelChange(index, "google", e.target.value)} />
          </div>
        ))}

        <button
          className={`btn ${editId ? "btn-warning" : "btn-success"} w-100`}
          onClick={savePackage}
        >
          {editId ? "Update Package" : "Add Package"}
        </button>
      </div>

      {/* TABLE */}
      <h5>Added Packages</h5>

      {packages.length === 0 ? (
        <p className="text-muted">No packages added yet</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Price</th>
              <th>Hotels</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.id}>
                <td>{pkg.title}</td>
                <td>{pkg.location}</td>
                <td>₹{pkg.price}</td>
                <td>{pkg.hotels.length}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2" onClick={() => editPackage(pkg)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => deletePackage(pkg.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}