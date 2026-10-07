import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [viewpassword,setViewpassword]=useState(false)



 




  return (
    <React.Fragment>
      <div className="container">
        {/* LEFT PANEL: Visual/Branding */}
        <div className="left-panel">
          <div className="left-content">
            <div className="logo">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Grovia
            </div>
            <h1>Set Your Partner Recruitment on Auto-Pilot</h1>
            <p>
              Join thousands of companies streamlining their hiring process with
              our modern digital platform.
            </p>
          </div>
        </div>
        {/* RIGHT PANEL: Registration Form */}
        <div className="right-panel">
          <div className="form-header">
            <h2>Create an Account</h2>
            <p>Please fill in the details to get started.</p>
          </div>
          <form id="registerForm" noValidate="">
            {/* Username Field */}
            <div className="input-group">
              <input type="text" id="username" placeholder=" " required="" />
              <label htmlFor="username">Username</label>
              <span className="error-message" id="usernameError">
                Username is required
              </span>
            </div>
            {/* Email Field */}
            <div className="input-group">
              <input type="email" id="email" placeholder=" " required="" />
              <label htmlFor="email">Email Address</label>
              <span className="error-message" id="emailError">
                Please enter a valid email
              </span>
            </div>
            {/* Password Field with Toggle */}
            <div className="input-group">
              <input
                type={viewpassword?"text":"password"}
                id="password"
                placeholder=" "
                required=""
              />
              <label htmlFor="password">Password</label>
              <button
                type="button"
                className="toggle-password"
                onClick={()=>setViewpassword((prev)=>!prev)}
              >
                {/* Eye Open Icon */}
                <svg viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
              </button>
              <span className="error-message" id="passwordError">
                Password must be at least 6 characters
              </span>
            </div>
            {/* Confirm Password Field with Toggle */}
            <div className="input-group">
              <input
                type="password"
                id="confirmPassword"
                placeholder=" "
                required=""
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <button
                type="button"
                className="toggle-password"
                
              >
                {/* Eye Open Icon */}
                <svg viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
              </button>
              <span className="error-message" id="confirmPasswordError">
                Passwords do not match
              </span>
            </div>
            <button type="submit" className="submit-btn" id="submitBtn">
              Sign Up
            </button>
          </form>
          <div className="form-footer">
            Already have an account? <Link to={"/login"}>Log in</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
