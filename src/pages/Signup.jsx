import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  let [name, setName] = useState("");
  let [pass, setPass] = useState("");
  let [confirmPass, setConfirmpass] = useState("");

  function submitform(event) {
    event.preventDefault();
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("pass", pass);
    window.location.href = "/loginpage";
  }

  function em(e) {
    setName(e.target.value);
  }
  function psw(e) {
    setPass(e.target.value);
  }
  function pswrd(e) {
    setConfirmpass(e.target.value);
  }

  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: "linear-gradient(to bottom right, #d79d78, #f7e9d7)",
    fontFamily: "'Arial', sans-serif",
  };

  const containerStyle = {
    width: "400px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#4a4a4a",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#d79d78",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const linkStyle = {
    display: "block",
    marginTop: "15px",
    textAlign: "center",
    color: "#d79d78",
    textDecoration: "none",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <form onSubmit={submitform}>
          <div>
            <label htmlFor="signupName" style={labelStyle}>
              Name:
            </label>
            <input
              type="text"
              id="signupName"
              placeholder="Enter your name"
              value={name}
              onChange={em}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label htmlFor="signupPassword" style={labelStyle}>
              Password:
            </label>
            <input
              type="password"
              id="signupPassword"
              placeholder="Enter your password"
              value={pass}
              onChange={psw}
              style={inputStyle}
              required
              minLength="6"
            />
          </div>
          <div>
            <label htmlFor="signupConfirmpassword" style={labelStyle}>
              Confirm Password:
            </label>
            <input
              type="password"
              id="signupConfirmpassword"
              placeholder="Confirm your password"
              value={confirmPass}
              onChange={pswrd}
              style={inputStyle}
              required
              minLength="6"
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Signup
          </button>
          <Link to="/loginpage" style={linkStyle}>
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
}
