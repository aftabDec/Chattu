import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const scrollRef = useRef();
  const { authUser, selectedUser } = useSelector((store) => store.user);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={scrollRef}
      className={`chat ${
        message?.senderId === authUser?._id ? "chat-end" : "chat-start"
      } py-6`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              message?.senderId === authUser?._id
                ? authUser?.profilePhoto
                : selectedUser?.profilePhoto
            }
          />
        </div>
      </div>
      <div>
        <div
          className={`chat-bubble ${
            message?.senderId !== authUser?._id
              ? "bg-blue-700 text-white"
              : "bg-blue-900 text-white"
          } `}
        >
          {message?.message}
        </div>
        <div className="chat-footer opacity-50 text-gray-400">
          {message?.seenAt ? `Seen at ${message.seenAt}` : "Not seen yet"}
        </div>
      </div>
    </div>
  );
};

export default Message;
