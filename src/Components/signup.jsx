import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const [showPassword, setShowPassword] = useState("password");
  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword((type) => (type === "password" ? "text" : "password"));
  };
  const handleSubmit = (e) => {};
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form className="signUpBox">
        <h1>Sign Up</h1>
        <div>
          <label className="label" htmlFor="fullName">
            Full Name
          </label>
          <input type="text" className="fullName" />
        </div>
        <div>
          <label className="label" htmlFor="fullName">
            Email
          </label>
          <input type="email" className="fullName" />
        </div>
        <div>
          <label className="label" htmlFor="fullName">
            Contact No.
          </label>
          <input
            type="number"
            style={{ MozAppearance: "textfield" }}
            className="fullName"
          />
        </div>
        <div>
          <label className="label" htmlFor="fullName">
            Date of Birth
          </label>
          <input type="date" className="fullName" />
        </div>
        <div>
          <label className="label" htmlFor="fullName">
            Password
          </label>
          <input type={showPassword} className="fullName" />
          {/* <button
            style={{
              outline: "none",
              border: "none",
            }}
          > */}
          <img
            src={showPassword === "password" ? hide : show}
            alt="show"
            height={20}
            width={20}
            style={{
              position: "absolute",
              bottom: "100px",
              cursor: "pointer",
              right: "450px",
            }}
            onClick={togglePassword}
          />
          {/* </button> */}
        </div>
        <div>
          <label className="label" htmlFor="fullName">
            Confirm Password
          </label>
          <input type={showPassword} className="fullName" />
          {/* <button
            style={{
              outline: "none",
              border: "none",
          >
            }} */}
          <img
            src={showPassword === "password" ? hide : show}
            alt="show"
            height={20}
            width={20}
            style={{
              position: "absolute",
              bottom: "15px",
              right: "450px",
              cursor: "pointer",
            }}
            onClick={togglePassword}
          />
          {/* </button> */}
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
