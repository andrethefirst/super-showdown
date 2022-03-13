import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className="login">
      <section className="nes-container is-dark with-title is-centered">
        <h3 className="Title">Super Showdown</h3>
        <div className="login-container nes-container">
          <input
          type="text"
          className="nes-input is-dark"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail Address"
          />
          <br />
          <input 
          type="password"
          className="nes-input is-dark"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          />
          <br />
          <button
          className="nes-btn is-error"
          onClick={() => logInWithEmailAndPassword(email,password)}
          >
            Login
          </button>
          <br />
          <button
          className="login-google nes-btn is-primary"
          onClick={signInWithGoogle}
          >
            Login with <p className="rainbowText">Google</p>
          </button>
          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login;