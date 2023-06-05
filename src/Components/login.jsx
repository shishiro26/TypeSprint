import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css";

export default function Login() {
  return (
    <div className="container1">
      <form className="formBox">
        <h1>Login</h1>
        <div>
          <div class="mailBox">
            <label className="labelBox">Email</label>
            <input required="" type="email" name="text" className="email" />
          </div>
          <div class="mailBox">
            <label className="labelBox">Password</label>
            <input required="" type="password" name="text" className="email" />
          </div>
          <hr style={{ width: "430px" }} />
          <button className="btn" style={{ margin: "10px" }}>
            {" "}
            Login
          </button>
          <div
            className="forgotBox"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              fontSize: "1em",
              gap: "5px",
            }}
          >
            <p>
              New to TypeSprint? Try <Link path="/">Sign Up</Link>
            </p>
            <p>
              <Link path="/">Forgot Password</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
