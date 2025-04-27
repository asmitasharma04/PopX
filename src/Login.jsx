import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleLogin = () => {
    if (isFormValid) {
      navigate("/account-settings");
    }
  };

  return (
    <div className="form-container">
      <h2>Signin to your<br />PopX Account</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit.</p>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="login-btn"
        disabled={!isFormValid}
        style={{
          backgroundColor: isFormValid ? "#4F46E5" : "#d1d5db",
          color: isFormValid ? "white" : "#9ca3af",
          cursor: isFormValid ? "pointer" : "not-allowed"
        }}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
