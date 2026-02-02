import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      {/* Page Title */}
      <h1 className="form-title">Login</h1>

      {/* Login Form */}
      <form>
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>

      <p className="link-text">
        Don&apos;t have an account?{" "}
        <Link to="/register">Register Here</Link>
      </p>
    </div>
  );
};

export default Login;
