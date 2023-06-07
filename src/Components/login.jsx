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
