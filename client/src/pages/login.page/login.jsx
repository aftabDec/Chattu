import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../redux/userSlice";

const Login = () => {
  const [loading, setLoading] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      navigate("/");
      console.log(res);
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: "",
    });
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-blue-600">
      <div className="flex max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-2/3 p-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white flex flex-col justify-center">
          <div className="text-4xl font-bold mb-4">ChatApp</div>
          <h1 className="text-3xl font-bold mb-2">Hello Welcome!</h1>
          <p className="text-lg mb-6">Sign in to continue access</p>
          <a href="https://www.yoursite.com" className="underline">
            www.yoursite.com
          </a>
        </div>
        <div className="w-1/3  p-8">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
          <form onSubmit={onSubmitHandler} className="space-y-4">
            <label htmlFor="">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-[white]  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[white] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <label
              htmlFor=""
              className="absolute left-3 -top-2 text-gray-500 transform -translate-y-1/2 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-gray-600 bg-white px-1"
            ></label>
            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-lg hover:from-purple-600 hover:to-blue-700`}
              disabled={loading}
            >
              {loading ? (
                <span className="loading-spinner loading"></span>
              ) : (
                "Sign in"
              )}
            </button>
            <p className="text-purple-700">
              <Link to="/register">New to ChatApp?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
