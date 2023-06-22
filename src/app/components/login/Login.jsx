"use client";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./login.scss";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  // axios.defaults.withCredentials = true;
  const instance = axios.create({
    withCredentials: true,
  });
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await instance.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/login`,
        {
          loginId,
          password,
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      setLoginId("");
      setPassword("");
      setLoading(false);
      toast.success("User Logged In Successfully");
      router.replace("/");
    } catch (error) {
      const { message } = JSON.parse(error.request.response);
      setLoading(false);
      toast.error(message);
      console.log(error);
    }
  };

  if (typeof window !== "undefined") {
    // Perform localStorage action
    // const item = localStorage.getItem("key");
    if (localStorage.userInfo) router.replace("/");
  }

  if (loading) return <p>Loading...</p>;

  return (
    <>
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
      <ToastContainer />
    </>
  );
};

export default Login;
