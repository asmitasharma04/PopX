import React, { useState } from "react";
import "./CreateAccount.css";

function CreateAccount() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    agency: ""
  });

  const isFormValid = Object.values(formData).every(field => field !== "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <h2>Create your <br /> PopX Account</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
      />

<div className="agency">
  <p>Are you an agency?</p>
  <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <input
        type="radio"
        name="agency"
        value="Yes"
        onChange={handleChange}
        checked={formData.agency === "Yes"}
      />
      Yes
    </label>
    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <input
        type="radio"
        name="agency"
        value="No"
        onChange={handleChange}
        checked={formData.agency === "No"}
      />
      No
    </label>
  </div>



      </div>

      <button className="register-btn" disabled={!isFormValid}>
        Register
      </button>
    </div>
  );
}

export default CreateAccount;
