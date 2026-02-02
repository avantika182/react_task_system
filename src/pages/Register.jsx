import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./Register.css"
const Register = () => {
  //Declaration Section
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  //Design Section
  return (
    <div className="form-container">
      {/*Page title */}
      <h1 className="form-title ">Register</h1>
      <form>
        {/*Name field */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
          />
        </div>
        {/*Email field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        {/*Phone number */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>
        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        {/* SUbmit button */}
        <button type="submit" className="btn-primary">
          Register
        </button>
      </form>
      <p className="link-text">
        Already have an account? <Link to="/login">Login Here</Link>
      </p>
    </div>
  );
};

export default Register;
