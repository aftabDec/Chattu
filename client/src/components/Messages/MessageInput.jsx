import axios from "axios";
import React, { useState } from "react";
import { LuSend } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../../redux/messageSlice";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message);
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:5000/message/send/${selectedUser?._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(setMessages([...messages, res?.data?.newMessage]));
    } catch (error) {
      console.log(error);
    }
    setMessage("");
  };
  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        action=""
        className="px-4 relative mb-5 py-3"
      >
        <div className="w-full">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Message here"
            className="w-full bg-primary-light px-3 py-2 text-gray-400 h-14 rounded-xl focus:outline-none focus:none"
          />
          <button
            type="submit"
            className="absolute text-3xl mr-10 text-white inset-y-0 end-0 flex items-center "
          >
            <LuSend />
          </button>
        </div>
      </form>
    </>
  );
};

export default MessageInput;
