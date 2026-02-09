import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ===== NAVBARS ===== */
import PublicNavbar from "./components/PublicNavbar";
import Navbar from "./components/Navbar";

/* ===== PUBLIC PAGES ===== */
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
/*import Login from "./pages/public/Login";
import Signup from "./pages/public/Signup";*/

/* ===== PACKAGES ===== */
import Packages from "./pages/packages/Packages";

/* ===== PACKAGE DETAILS ===== */
import GoaRomantic from "./pages/packageDetails/GoaRomantic";
import RadissonBaga from "./pages/packageDetails/RadissonBaga";
import KeralaBackwaters from "./pages/packageDetails/KeralaBackwaters";

/* ===== USER PAGES ===== */
import UserDashboard from "./pages/user/UserDashboard";
/*import Bookings from "./pages/bookings/Bookings";*/
import BookingHistory from "./pages/bookings/BookingHistory";

/* ===== ADMIN PAGES ===== */
import AdminDashboard from "./pages/admin/AdminDashboard";
/*import Reviews from "./pages/reviews/Reviews";*/
import AdminReviews from "./pages/admin/AdminReviews";

/* ===== PAYMENT ===== */
import Payment from "./pages/payment/Payment";
import Receipt from "./pages/receipt/Receipt";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AdminLogin from "./pages/auth/AdminLogin";

import AddPackage from "./pages/admin/AddPackage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ===== PUBLIC ROUTES ===== */}
        <Route
          path="/"
          element={
            <>
              <PublicNavbar />
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/packages"
          element={
            <>
              <PublicNavbar />
              <Packages />
            </>
          }
        />

        <Route
  path="/admin/reviews"
  element={
    <>
      <Navbar />
      <AdminReviews />
    </>
  }
/>

        <Route
  path="/admin/add-package"
  element={
    <>
      <Navbar />
      <AddPackage />
    </>
  }
/>
        <Route
  path="/receipt"
  element={
    <>
      <PublicNavbar />
      <Receipt />
    </>
  }
/>
<Route
  path="/bookings"
  element={
    <>
      <Navbar />
      <BookingHistory />
    </>
  }
/>

        <Route
          path="/about"
          element={
            <>
              <PublicNavbar />
              <About />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <PublicNavbar />
              <Contact />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <PublicNavbar />
              <Login />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <PublicNavbar />
              <Signup />
            </>
          }
        />

        {/* ===== PACKAGE DETAILS ===== */}
        <Route
          path="/package/goa-romantic"
          element={
            <>
              <PublicNavbar />
              <GoaRomantic />
            </>
          }
        />

        <Route
          path="/package/radisson-baga"
          element={
            <>
              <PublicNavbar />
              <RadissonBaga />
            </>
          }
        />

        <Route
          path="/package/kerala-backwaters"
          element={
            <>
              <PublicNavbar />
              <KeralaBackwaters />
            </>
          }
        />

        {/* ===== PAYMENT ===== */}
        <Route
          path="/payment"
          element={
            <>
              <PublicNavbar />
              <Payment />
            </>
          }
        />

        {/* ===== USER ROUTES ===== */}
        <Route
          path="/user"
          element={
            <>
              <Navbar />
              <UserDashboard />
            </>
          }
        />

      

        {/* ===== ADMIN ROUTES ===== */}
        <Route
          path="/admin"
          element={
            <>
              <Navbar />
              <AdminDashboard />
            </>
          }
        />

      
    


      </Routes>
    </BrowserRouter>
  );
}

export default App;
