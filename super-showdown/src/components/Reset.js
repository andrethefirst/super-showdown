import React, {useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {auth, sendPasswordReset } from "../firebase";


function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading ] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard")
  }, [user, loading]);

  return (
    <div className="reset">
      <section className="nes-container is-dark with-title is-centered">
        <h3 className="Title">Super Showdown</h3>
        <div className="reset-container nes-container">
          <input 
          type="text"
          className="reset-textBox nes-input is-dark"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          />
          <button
          className="reset-btn nes-btn is-warning"
          onClick={() => sendPasswordReset(email)}
          >
            Send password reset email
          </button>

          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reset;