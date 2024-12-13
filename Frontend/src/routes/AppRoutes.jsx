import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
// import PublicRoutes from './PublicRoutes';
import routes from "./routes";
import Shop from "../pages/shop/Shop";
import Products from "../pages/product/Products";
import ContactUs from "../pages/contact/ContactUs";
import Home from "../pages/home/Home";
// import Navbar from "../components/navbar/Navbar";

// Lazy load components for better performance
const Login = lazy(() => import("../features/auth/Login"));
const SignUp = lazy(() => import("../features/auth/SignUp"));
const Navbar = lazy(() => import("../components/navbar/Navbar"));  // Lazy load Navbar

const AppRoutes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route
          path={routes.login.path}
          element={<Login />}
        />
        <Route
          path={routes.signup.path}
          element={<SignUp />}
        />

        {/* Protected Routes with Navbar */}
        <Route
          path={routes.home.path}
          element={
            <ProtectedRoute>
              <Navbar /> {/* Render Navbar for protected routes */}
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path={routes.products.path}
          element={
            <ProtectedRoute>
              <Navbar />
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path={routes.contact.path}
          element={
            <ProtectedRoute>
              <Navbar />
              <ContactUs />
            </ProtectedRoute>
          }
        />
        <Route
          path={routes.shop.path}
          element={
            <ProtectedRoute>
              <Navbar />
              <Shop />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;
