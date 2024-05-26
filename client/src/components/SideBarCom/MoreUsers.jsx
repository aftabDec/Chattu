import React from "react";
import Users from "./Users";

import { useSelector } from "react-redux";
import useGetOtherUsers from "../../hook/useGetOtherUsers";

const MoreUsers = () => {
  // my custom hook
  useGetOtherUsers();
  const { otherUsers } = useSelector((store) => store.user);
  if (!otherUsers) return; // early return in react

  return (
    <div className="relative ">
      {otherUsers?.map((user) => {
        return <Users key={user._id} user={user} />;
      })}
    </div>
  );
};

export default MoreUsers;
