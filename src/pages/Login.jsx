import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      {/* page title*/}
      <h1 className="form-title">Login</h1>
     {/*Login Form*/}
      <form>
        {/*Email Field*/}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        {/* Password Field*/}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder=" enter your password"
          />
        </div>
        {/*Submit Button*/}
        <button className="btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
