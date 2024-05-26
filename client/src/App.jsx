import Register from "./pages/register.page/register";
import Home from "./pages/homePage/home";
import Login from "./pages/login.page/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import io from "socket.io-client";
import { setSocket } from "./redux/socketSlice";
import { setOnlineUsers } from "./redux/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  const { authUser } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    let socketIo;

    if (authUser) {
      socketIo = io("http://localhost:5000", {
        query: { userId: authUser._id },
      });

      dispatch(setSocket(socketIo));

      socketIo.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });

      socketIo.on("disconnect", () => {
        dispatch(setOnlineUsers([])); // Clear online users on disconnect
      });
    }

    return () => {
      if (socketIo) {
        socketIo.disconnect();
        dispatch(setSocket(null));
      }
    };
  }, [authUser, dispatch]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
