import React from "react";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineInbox,
  AiOutlineLogout,
  AiOutlineGroup,
} from "react-icons/ai";

import Logout from "./Logout";
import { useSelector } from "react-redux";

const SideHeader = () => {
  const { authUser } = useSelector((store) => store.user);
  // Array representing each item in the list
  const menuItems = [
    { icon: <AiOutlineHome />, label: "Home" },
    { icon: <AiOutlineMessage />, label: "Chat" },
    { icon: <AiOutlineInbox />, label: "Inbox" },
    { icon: <AiOutlineGroup />, label: "Group" },
  ];
  return (
    <div className="w-[10%]  mt-4 flex flex-col items-center rounded-tl-3xl rounded-bl-3xl h-[95%] mx-3 bg-primary">
      <div className="flex flex-col mt-5 items-center">
        <div className="w-12  rounded-full">
          <img src={authUser?.profilePhoto} alt="avatar" />
          <span className={"online-indicator"}></span>
          {/* Online indicator */}
        </div>
        <span className="mt-4 text-lg text-blue-900">
          Hello <span className="">{authUser?.username}</span>
        </span>
      </div>
      {/* List of menu items */}
      <ul className="  ">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex cursor-pointer hover:bg-blue-400 duration-75 ease-in pl-4 h-10 rounded-tr-3xl text-gray-200 rounded-tl-3xl rounded-bl-3xl  w-28 items-center my-10 space-x-3"
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
        <Logout />
      </ul>
    </div>
  );
};

export default SideHeader;
