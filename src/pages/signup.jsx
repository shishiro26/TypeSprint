import React, { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import "../css/signup.css";
import show from "../assets/show.png";
import hide from "../assets/hide.png";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Play&display=swap"],
  },
});

function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    DOB: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    errors: {},
    isError: false,
  });
  const [showPassword, setShowPassword] = useState("password");

  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword((type) => (type === "password" ? "text" : "password"));
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleSubmit = (e) => {};

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  function handleChange(e, property) {
    setData({ ...data, [property]: e.target.value });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* {JSON.stringify(data)}   */}
      <form className="signUpBox" onSubmit={submitForm}>
        <h1>Sign Up</h1>
        <div>
          <label className="label" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            className="fullName"
            id="name"
            onChange={(e) => handleChange(e, "name")}
            value={data.name}
          />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="fullName"
            id="email"
            onChange={(e) => handleChange(e, "email")}
            value={data.email}
          />
        </div>
        <div>
          <label className="label" htmlFor="number">
            Contact No.
          </label>
          <input
            type="number"
            style={{ MozAppearance: "textfield" }}
            className="fullName"
            id="number"
            onChange={(e) => handleChange(e, "number")}
            value={data.number}
          />
        </div>
        <div>
          <label className="label" htmlFor="DOB">
            Date of Birth
          </label>
          <input
            type="date"
            className="fullName"
            id="DOB"
            onChange={(e) => handleChange(e, "DOB")}
            value={data.DOB}
          />
        </div>
        <div>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword}
            className="fullName"
            id="password"
            onChange={(e) => handleChange(e, "password")}
            value={data.password}
          />

          <img
            src={showPassword === "password" ? hide : show}
            alt="show"
            height={20}
            width={20}
            style={{
              position: "absolute",
              bottom: "87px",
              cursor: "pointer",
              right: "450px",
            }}
            onClick={togglePassword}
          />
        </div>
        <div>
          <label className="label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type={showPassword}
            className="fullName"
            id="confirmPassword"
            onChange={(e) => handleChange(e, "confirmPassword")}
            value={data.confirmPassword}
          />

          <img
            src={showPassword === "password" ? hide : show}
            alt="show"
            height={20}
            width={20}
            style={{
              position: "absolute",
              bottom: "7px",
              right: "450px",
              cursor: "pointer",
            }}
            onClick={togglePassword}
          />
        </div>
        <div>
          <button
            className="btn"
            style={{ width: "452px", marginTop: "10px", marginBottom: "10px" }}
            onKeyDown={handleKeyDown}
            onSubmit={handleSubmit}
          >
            Sign Up
          </button>
        </div>
        <div
          style={{
            fontFamily: "play,sans-serif",
          }}
        >
          <p>
            Already a member? Try{" "}
            <Link to="/login" style={{ textDecoration: "none", margin: "5px" }}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
