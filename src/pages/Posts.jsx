import React, { useState } from "react";
import SiderBar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
// import FormPost from "../components/FormPost";
// import AllPost from "../components/AllPost";
// import Home from "../pages/Home.jsx";
import PostListProvider from "../store/store-posts-item.jsx";
import { Outlet } from "react-router-dom";
const Posts = () => {
  return (
    <>
      <PostListProvider>
        <div className="flex">
          <SiderBar />
          <div className="container-fluid px-0">
            <Header />
            {/* {clinks === "Home" && <Home />}
            {clinks === "Posts" && <AllPost />}
            {clinks === "Create Posts" && <FormPost setclinks={setclinks} />} */}
            <Outlet />
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
};

export default Posts;
