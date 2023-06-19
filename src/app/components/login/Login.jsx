"use client";

import { useState } from "react";
import "./login.scss";
import Link from "next/link";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="signup--page">
      <h2 className="signup--page__header font-bold">Log In</h2>
      <form className="signup--page__form" onSubmit={handleSubmit}>
        <input
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          className="signup--page__form__input"
          type="text"
          placeholder="Enter Your Email or Username"
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
        <button type="submit" className="signup--page__form__btn mt-2 mb-4">
          Log In
        </button>
      </form>
      <p className="mt-16 text-[#c1c1c1]">Do not have an Account ?</p>
      <Link href="/register" className="mt-2 underline">
        Sign Up
      </Link>
      <footer className="footer mt-8 text-xs text-[#c1c1c1]">
        Ecommerce Name © {new Date().getFullYear()}
      </footer>
    </section>
  );
};

export default Login;
