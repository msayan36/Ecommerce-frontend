"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import ProfileImg from "../profile/images/profile.png";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const EditForm = () => {
  const router = useRouter();
  const instance = axios.create({
    withCredentials: true,
  });

  const [loading, setLoading] = useState(false);
  // const [submit, setSubmit] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");

  const [formProfileImage, setFormProfileImage] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  const apiCall = async () => {
    setLoading(true);
    try {
      const res = await instance.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/me`
      );
      setUserInfo(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    // setFormProfileImage(file);
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    // console.log(base64EncodedImage);
    setLoading(true);
    try {
      const res = await instance.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/uploadImage`,
        {
          data: base64EncodedImage,
        }
      );

      setUserInfo((prevVal) => ({ ...prevVal, profile_pic: res.data.url }));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const upload = async () => {
    if (previewSource) await uploadImage(previewSource);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        name,
        username,
        email,
        password,
        confirmPassword,
        profileDesc,
        profile_pic,
      } = userInfo;

      // console.log(profileDesc, profile_pic);

      if (password) {
        if (password !== confirmPassword) {
          return toast.error("Password and Confirm Password not matched");
        }
      }
      setLoading(true);
      const res = await instance.put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/me`,
        {
          name,
          username,
          email,
          profileDesc,
          profile_pic,
        }
      );

      // console.log(res);
      // localStorage.setItem("userInfo", JSON.stringify(res.data));
      // setName("");
      // setEmail("");
      // setPassword("");
      // setConfirmPassword("");
      // setUsername("");
      setLoading(false);
      toast.success("User Details Updated Successfully");
      router.replace("/profile");
    } catch (error) {
      const { message } = JSON.parse(error.request.response);
      setLoading(false);
      toast.error(message);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  if (loading) return <h1>Loading ...</h1>;

  return (
    <>
      <form className="mt-8 flex flex-col" onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <Image
            src={previewSource ? previewSource : userInfo.profile_pic}
            alt="Profile Picture"
            width={60}
            height={60}
          ></Image>
          <input
            type="file"
            className="ml-4 text-blue-400 cursor-pointer hover:text-blue-700"
            value={formProfileImage}
            onChange={handleImageInputChange}
          />
          {previewSource && (
            <button
              onClick={upload}
              className="btn bg-blue-600 px-2 py-1 rounded"
            >
              Upload
            </button>
          )}
        </div>
        <input
          className="py-[0.2rem] px-2 outline-none bg-transparent border-[0.1rem] text-white rounded-md border-white w-[18rem] mb-4"
          type="text"
          placeholder="Edit Your Username"
          onChange={(e) =>
            setUserInfo((prevVal) => ({ ...prevVal, username: e.target.value }))
          }
          value={userInfo.username}
          required
        />
        <input
          className="py-[0.2rem] px-2 outline-none bg-transparent border-[0.1rem] text-white rounded-md border-white w-[18rem] mb-4"
          type="text"
          placeholder="Edit Your Name"
          onChange={(e) =>
            setUserInfo((prevVal) => ({ ...prevVal, name: e.target.value }))
          }
          value={userInfo.name}
          required
        />
        <input
          className="py-[0.2rem] px-2 outline-none bg-transparent border-[0.1rem] text-white rounded-md border-white w-[18rem] mb-4"
          type="email"
          placeholder="Edit Email"
          onChange={(e) =>
            setUserInfo((prevVal) => ({ ...prevVal, email: e.target.value }))
          }
          value={userInfo.email}
          required
        />
        <input
          className="py-[0.2rem] px-2 outline-none bg-transparent border-[0.1rem] text-white rounded-md border-white w-[18rem] mb-4"
          type="password"
          placeholder="Enter New Password"
          onChange={(e) =>
            setUserInfo((prevVal) => ({ ...prevVal, password: e.target.value }))
          }
          value={userInfo.password}
        />
        <input
          className="py-[0.2rem] px-2 outline-none bg-transparent border-[0.1rem] text-white rounded-md border-white w-[18rem] mb-4"
          type="password"
          placeholder="Confirm New Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <textarea
          className="py-[0.2rem] px-2 outline-none bg-transparent border-[0.1rem] text-white rounded-md border-white w-[25rem] h-[8rem] mb-4"
          placeholder="Add Your Bio"
          onChange={(e) =>
            setUserInfo((prevVal) => ({
              ...prevVal,
              profileDesc: e.target.value,
            }))
          }
          value={userInfo.profileDesc}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-700 w-fit py-[0.3rem] px-2 rounded hover:bg-blue-900 cursor-pointer transition-all"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default EditForm;
