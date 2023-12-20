import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Homepage/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { LoggedState } from "./context/auth";
import DailyTask from "./Pages/Tasks/DailyTask";
import Blogs from "./Pages/Blogs/Blogs";
import ChatPage from "./Pages/ChatRoom/ChatPage";
import ScheduleLiveStream from "./Pages/Tasks/Webinars";
import Rooms from "./Pages/Tasks/Rooms";

function App() {
  const { isLoggedIn } = LoggedState();
  const navigate = useNavigate();

  const RequireAuth = ({ children }) => {
    console.log(isLoggedIn);
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/community-chat" element={<ChatPage />} />
      <Route exact path="/webinars" element={<ScheduleLiveStream/>} />
      <Route exact path="/webinars/:roomID" element={<Rooms/>} />
      <Route
        path="/Tasks/:level/:addictType"
        element={
          <RequireAuth>
            <DailyTask />
          </RequireAuth>
        }
      />
      <Route
        path="/success-stories"
        element={
          <RequireAuth>
            <Blogs />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
