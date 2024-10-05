import React from "react";
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import SignUp from "./pages/SignUp/Signup";
import Login from "./pages/Login/Login";
import Pinnednotes from "./pages/Pinned/Pinnednotes";

const routes = (
  <Router>
    <Routes>
      <Route path="/Home" exact element={<Home />}></Route>
      <Route path="/login" exact element={<Login />}></Route>
      <Route path="/signup" exact element={<SignUp />}></Route>
      <Route path="/pinned-Items" exact element={<Pinnednotes />}></Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);
const Aps = () => {
  return <div>{routes}</div>;
};

export default Aps;
