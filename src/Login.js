import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  // useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //   firebase login shiiiiit
  };

  const register = (e) => {
    e.preventDefault();
    //   some firebase shiiit
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          {/* Controlled Components */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to AMAZON FAKE Clone Conditions of Use and
          Privacy Notice.
        </p>
        <button onChlick={register} className="login__registerButton">
          Create you Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
