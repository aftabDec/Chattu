import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandel = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/logout`);
      navigate("/login");
      console.log(res);
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li
      className="flex cursor-pointer hover:bg-blue-400 duration-75 ease-in pl-4 h-10 rounded-tr-3xl text-gray-200 rounded-tl-3xl rounded-bl-3xl w-28 items-center my-10 space-x-3"
      onClick={logoutHandel}
    >
      <>
        <AiOutlineLogout />
        <label htmlFor="">Logout</label>
      </>
    </li>
  );
};

export default Logout;
