"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  // axios.defaults.withCredentials = true;
  const instance = axios.create({
    withCredentials: true,
  });
  const [loading, setLoading] = useState(false);

  const apiCall = async () => {
    setLoading(true);
    const res = await instance.get(
      "https://ecommerce-backend-neo8.onrender.com/api/v1/users/me"
    );

    console.log(res);
    setLoading(false);
  };

  useEffect(() => {
    apiCall();
  }, []);

  // if (loading) return <p>Loading</p>;

  return <div>Profile</div>;
};

export default Profile;
