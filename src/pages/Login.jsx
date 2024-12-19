import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  let [name, setName] = useState("");
  let [pass, setPass] = useState("");

  function submitform(event) {
    event.preventDefault();

    const storeditem1 = sessionStorage.getItem("name");
    const storeditem2 = sessionStorage.getItem("pass");

    if (storeditem1 === name && storeditem2 === pass) {
      alert("Login Successful");
      window.location.href = "/"; // Redirects to main page in the same tab
    } else {
      alert("Invalid email or password.");
    }
  }

  function em(e) {
    setName(e.target.value);
  }

  function paswrd(e) {
    setPass(e.target.value);
  }

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(to bottom, #d79d78, #f5ede2)",
      fontFamily: "Arial, sans-serif",
    },
    loginBox: {
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      padding: "30px 40px",
      width: "400px",
      textAlign: "center",
    },
    title: {
      fontSize: "2rem",
      color: "#d79d78",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "20px",
      textAlign: "left",
    },
    label: {
      fontSize: "1rem",
      color: "#555",
      marginBottom: "5px",
      display: "block",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "1rem",
      outline: "none",
      transition: "border-color 0.3s",
    },
    inputFocus: {
      borderColor: "#d79d78",
    },
    button: {
      width: "100%",
      background: "#d79d78",
      color: "#fff",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    buttonHover: {
      background: "#bf815d",
    },
    link: {
      display: "inline-block",
      marginTop: "15px",
      fontSize: "0.9rem",
      color: "#d79d78",
      textDecoration: "none",
    },
    linkHover: {
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.loginBox} onSubmit={submitform}>
        <h2 style={styles.title}>Login</h2>
        <div style={styles.formGroup}>
          <label htmlFor="loginName" style={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="loginName"
            style={styles.input}
            placeholder="Enter your name"
            onChange={em}
            required
            value={name}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="loginPassword" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="loginPassword"
            style={styles.input}
            placeholder="Enter your password"
            onChange={paswrd}
            required
            value={pass}
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.background = styles.buttonHover.background)
          }
          onMouseOut={(e) => (e.target.style.background = styles.button.background)}
        >
          Login
        </button>
        <Link
          to="/signinpage"
          style={styles.link}
          onMouseOver={(e) =>
            (e.target.style.textDecoration = styles.linkHover.textDecoration)
          }
          onMouseOut={(e) => (e.target.style.textDecoration = "none")}
        >
          Don't have an account? Signup
        </Link>
      </form>
    </div>
  );
}
