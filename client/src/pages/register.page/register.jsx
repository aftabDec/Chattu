import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; // Make sure to have react-toastify installed and properly configured
import GenderCheckbox from "./genderCheck";

const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-blue-600">
      <div className="flex max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-2/3 p-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white flex flex-col justify-center">
          <div className="text-4xl font-bold mb-4">ChatApp</div>
          <h1 className="text-3xl font-bold mb-2">Hello Back</h1>
          <p className="text-lg mb-6">Register to create an account</p>
          <a href="https://www.yoursite.com" className="underline">
            www.yoursite.com
          </a>
        </div>
        <div className="w-5/12 p-8">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form onSubmit={onSubmitHandler} className="space-y-4">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[white] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              value={user.fullName}
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-[white] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              value={user.username}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[white] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-[white] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              value={user.confirmPassword}
            />
            <GenderCheckbox
              onCheckboxChange={handleCheckbox}
              selectedGender={user.gender}
            />
            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-lg hover:from-purple-600 hover:to-blue-700`}
              disabled={loading}
            >
              {loading ? (
                <span className="loading-spinner loading"></span>
              ) : (
                "Sign Up"
              )}
            </button>
            <p className="text-purple-700">
              <Link to="/login">Already have an account?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
