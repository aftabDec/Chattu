import React from "react";
import SideBar from "../../components/SideBarCom/SideBar";
import MessageContainer from "../../components/Messages/MessageContainer";
import SideHeader from "../../components/SideBarCom/SideHeader";
const Home = () => {
  return (
    <div className="flex flex-row md:flex-row h-screen rounded-lg  overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideHeader />
      <SideBar />
      <div className="flex items-start">
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
