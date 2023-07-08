import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { useState } from "react";
import show from "../assets/show.png";
import hide from "../assets/hide.png";
import WebFont from "webfontloader";
import axios from "axios";

WebFont.load({
  google: {
    families: ["Play&display=swap"],
  },
});

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState("password");

  const validateForm = () => {
    const errors = {};
    if (!data.email) {
      errors.email = "Email is required";
    }
    if (!data.password) {
      errors.password = "Password is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002/api/v1/auth/login", {
        username: data.email,
        password: data.password,
      });

      if (response.data.message === "Email not exists") {
        alert("Email does not exist");
      } else if (response.data.token) {
        navigate("/");
      } else {
        console.log(response.data);
        alert("Incorrect email and password combination");
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) {
        alert("Incorrect password");
      } else if (err.response.status === 404) {
        alert("Email does not exist");
      } else {
        alert(err.message);
      }
    }
  };

  const togglePassword = () => {
    setShowPassword((type) => (type === "password" ? "text" : "password"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is being submitted");
      login(e);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="container1">
      <form className="formBox" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <div className="mailBox">
            <label className="labelBox" htmlFor="email">
              Email
            </label>
            <input
              required
              type="email"
              name="text"
              className="email"
              id="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="mailBox">
            <label className="labelBox" htmlFor="password">
              Password
            </label>
            <input
              required
              type={showPassword}
              name="text"
              className="email"
              id="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <img
              src={showPassword === "password" ? hide : show}
              alt="show"
              height={20}
              width={20}
              style={{
                position: "absolute",
                top: "300px",
                right: "460px",
                cursor: "pointer",
              }}
              onClick={togglePassword}
            />
          </div>
          <hr className="line" />
          <button className="btnBox">Login</button>
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
