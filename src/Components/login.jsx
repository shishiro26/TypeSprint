import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import { useState } from "react";
import show from "../assets/show.png";
import hide from "../assets/hide.png";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Play&display=swap"],
  },
});

export default function Login() {
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
    <div className="container1">
      <form className="formBox">
        <h1>Login</h1>
        <div>
          <div className="mailBox">
            <label className="labelBox">Email</label>
            <input required="" type="email" name="text" className="email" />
          </div>
          <div className="mailBox">
            <label className="labelBox">Password</label>
            <input
              required=""
              type={showPassword}
              name="text"
              className="email"
            />
            <img
              src={showPassword === "password" ? hide : show}
              alt="show"
              height={20}
              width={20}
              style={{
                position: "absolute",
                top: "305px",
                right: "460px",
                cursor: "pointer",
              }}
              onClick={togglePassword}
              onSubmit={handleSubmit}
              onKeyDown={handleKeyDown}
            />
          </div>
          <hr className="line" />
          <button className="btnBox"> Login</button>
          <div
            className="forgotBox"
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: "1em",
              gap: "75px",
              margin: "10px",
              fontFamily: "Play, sans-serif",
            }}
          >
            <p>
              New to TypeSprint? Try <Link to="/signup">Sign Up</Link>
            </p>
            <p>
              <Link to="/">Forgot Password</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
