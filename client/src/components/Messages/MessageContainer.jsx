import React from "react";
import MoreMessages from "./MoreMessages";
import MessageInput from "./MessageInput";
import { useDispatch, useSelector } from "react-redux";
import { setOnlineUsers } from "../../redux/userSlice";

const MessageContainer = () => {
  const { selectedUser, onlineUsers } = useSelector((store) => store.user);
  const isOnline = onlineUsers?.includes(selectedUser?._id);

  return (
    <div className="flex flex-col h-full  w-full">
      {selectedUser ? (
        <div className="md:min-w-[900px] h-full mt-4 flex flex-col mb-2">
          <div className="header rounded-xl bg-primary-light flex items-center py-2 px-10 mb-2">
            <div
              className={`avatar relative ${
                isOnline ? "border-green-500" : ""
              }`}
            >
              <div className="w-10 rounded-full relative">
                <img
                  src={selectedUser?.profilePhoto}
                  alt="user-profile"
                  className="rounded-full"
                />
                {isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>
            </div>
            <div className="flex mx-3 flex-col">
              <p className="text-white">{selectedUser?.fullName}</p>
            </div>
          </div>
          <div className="flex-1 sm:h-[450px] md:h-[695px]  overflow-y-scroll">
            <MoreMessages />
          </div>
          <div className="flex-shrink-0">
            <MessageInput />
          </div>
        </div>
      ) : (
        <NoChatSelect />
      )}
    </div>
  );
};

const NoChatSelect = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 ❄</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
};

export default MessageContainer;
