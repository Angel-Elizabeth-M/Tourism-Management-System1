export default function Login() {
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Login</h3>
      <input className="form-control mb-2" placeholder="Email" />
      <input className="form-control mb-3" type="password" placeholder="Password" />
      <button className="btn btn-dark w-100">Login</button>
    </div>
  );
}
