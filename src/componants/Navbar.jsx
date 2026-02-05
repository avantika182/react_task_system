import React from "react";
import "../index.css";

function Navbar({title,onLogout,onLogin}) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{title}</h1>
      </div>
      <div className="navbar-actions">
        <button className="btn-secondary" onClick={onLogout}>
            
            Log Out
            </button>
            <button className="btn-primary" onClick={onLogin}>
                Add Task
            </button>
      </div>
    </nav>
  );
}

export default Navbar;
