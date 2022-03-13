import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if(loading) return;
    if(user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="register">
      <section className="nes-container is-dark with-title is-centered">
      <h3 className="Title">Super Showdown</h3>
      <div className = "login-container nes-container">
        <div className="register-container ">
          <input
          type="text"
          className="register-textBox nes-input is-dark"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          />
          <br/>
          <input 
          type="text"
          className="register-textBox nes-input is-dark"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          />
          <br/>
          <input
          type="password"
          className="register-textBox nes-input is-dark"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          />
          <br />
          <button className="register-btn nes-btn is-error" onClick={register}>
            Register
          </button>
          <br/>
          <button
          className="login-google nes-btn is-primary"
          onClick={signInWithGoogle}
          >
            Register with <p className="rainbowText">Google</p>
          </button>

          <div>
            Already have an account? <Link to="/">Login</Link> now.
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Register;