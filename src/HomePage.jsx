import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit.</p>
      <p>Lorem ipsum dolor sit.</p>
      <div className="button-group">
        <button className="btn" onClick={() => navigate("/create-account")}>
          Create Account
        </button>
        <button className="btn" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default HomePage;
