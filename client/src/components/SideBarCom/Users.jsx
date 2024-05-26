import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../redux/userSlice";

const User = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser, onlineUsers } = useSelector((store) => store.user);
  const isOnline = onlineUsers?.includes(user._id);

  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  return (
    <div
      className={`flex w-60 bg-primary-light mt-9 items-center hover:bg-primary rounded-xl py-3 p-3 cursor-pointer ${
        selectedUser?._id === user?._id ? "bg-blue-500 text-black" : ""
      }`}
      onClick={() => selectedUserHandler(user)}
    >
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className="w-12 rounded-full">
          <img src={user.profilePhoto} alt="avatar" />
        </div>
      </div>
      <div className="flex mx-3 flex-col">
        <div className="text-sm text-gray-300 font-medium">{user.username}</div>
        <div className="text-xs text-gray-300 truncate">{user.status}</div>
      </div>
      <div className="text-xs text-gray-300 ml-auto">19:4</div>
    </div>
  );
};

export default User;
