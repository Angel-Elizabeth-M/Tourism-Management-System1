export default function Signup() {
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Sign Up</h3>
      <input className="form-control mb-2" placeholder="Name" />
      <input className="form-control mb-2" placeholder="Email" />
      <input className="form-control mb-3" type="password" placeholder="Password" />
      <button className="btn btn-success w-100">Create Account</button>
    </div>
  );
}
