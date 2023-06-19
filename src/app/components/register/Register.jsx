"use client";

import { useState } from "react";
import "./register.scss";
import Link from "next/link";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="signup--page">
      <h2 className="signup--page__header font-bold">Sign Up</h2>
      <form className="signup--page__form" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="signup--page__form__input"
          type="text"
          placeholder="Enter Your Name"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup--page__form__input"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup--page__form__input"
          type="password"
          placeholder="Enter Password"
          required
        />
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="signup--page__form__input"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup--page__form__input"
          type="text"
          placeholder="Enter an unique Username"
          required
        />
        <button type="submit" className="signup--page__form__btn mt-2 mb-4">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-[#c1c1c1]">Already have an Account ?</p>
      <Link href="/login" className="mt-2 underline">
        Log In
      </Link>
      <footer className="footer mt-8 text-xs text-[#c1c1c1]">
        Ecommerce Name © {new Date().getFullYear()}
      </footer>
    </section>
  );
};

export default Register;
