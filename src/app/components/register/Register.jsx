"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./register.scss";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
  // axios.defaults.withCredentials = true;
  const instance = axios.create({
    withCredentials: true,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        return toast.error("Password and Confirm Password not matched");
      }
      setLoading(true);
      const res = await instance.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/register`,
        {
          name,
          email,
          password,
          username,
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setUsername("");
      setLoading(false);
      toast.success("User Registered Successfully");
      router.replace("/");
    } catch (error) {
      const { message } = JSON.parse(error.request.response);
      setLoading(false);
      toast.error(message);
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
      <ToastContainer />
    </>
  );
};

export default Register;
