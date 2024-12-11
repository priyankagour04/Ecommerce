import "./App.css";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/home/home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Redirect "/" to "/login" */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
