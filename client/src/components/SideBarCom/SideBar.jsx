import React from "react";
import SearchBar from "./SearchBar";
import MoreUsers from "./MoreUsers";

const SideBar = () => {
  return (
    <>
      <div className="flex-shrink-0 flex flex-col mt-4 rounded-xl w-1/5 h-[95%] mx-3 bg-primary-dark">
        <SearchBar />

        <div className="divider flex items-start h-[500px] w-[100%] relative   overflow-y-scroll ">
          <MoreUsers />
        </div>
      </div>
    </>
  );
};

export default SideBar;
