import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setMessages } from "../redux/messageSlice";

export const useGetMessagesHook = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:5000/message/${selectedUser?._id}`
        );

        dispatch(setMessages(res.data));
        console.log("response from getmsg", res);
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedUser?._id) {
      fetchMessages();
    } else {
      console.log("No selected user, skipping fetchMessages");
    }
  }, [selectedUser?._id, dispatch]);
};
export default useGetMessagesHook;
