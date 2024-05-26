import React from "react";
import MoreMessage from "./Message";
import { useGetMessagesHook } from "../../hook/useGetMessages";
import { useSelector } from "react-redux";
import useGetRealTimeMessage from "../../hook/useGetRealTimeMessage";
const MoreMessages = () => {
  useGetMessagesHook();
  useGetRealTimeMessage();
  const { messages } = useSelector((store) => store.message);
  const { socket } = useSelector((store) => store.socket);
  return (
    <div className="px-4  m-10 my-5 flex-1 ">
      {messages &&
        messages?.map((message) => {
          return <MoreMessage key={message?._id} message={message} />;
        })}
    </div>
  );
};

export default MoreMessages;
