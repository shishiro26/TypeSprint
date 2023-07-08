import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/signup.css";
import show from "../assets/show.png";
import hide from "../assets/hide.png";
import axios from "axios";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    DOB: "",
    password: "",
    confirmPassword: "",
  });


  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5002/api/v1/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      alert("User Registation Successfully");
    } catch (err) {
      alert(err);
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      alert("Registered Successfully");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container">
      <form className="signUpBox" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="fullName"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="fullName"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="number">Contact No.</label>
          <input
            type="number"
            className="fullName"
            id="number"
            name="number"
            value={data.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="DOB">Date of Birth</label>
          <input
            type="date"
            className="fullName"
            id="DOB"
            name="DOB"
            value={data.DOB}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="fullName"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <img
            src={showPassword ? hide : show}
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="fullName"
            id="confirmPassword"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
          />
          <img
            src={showPassword ? hide : show}
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
          <button className="btn" style={{ width: "452px" }} type="submit" onClick={save}>
            Sign Up
          </button>
        </div>
        <div>
          <p>
            Already a member? Try{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
