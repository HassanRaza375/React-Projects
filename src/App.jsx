import "./App.css";
import React, { useState } from "react";
// import Todo from "./pages/todo";
// import Counter from "./components/counter";
// import Calculator from "./pages/calculator";
// import Table from "./pages/table";
// import Table from "./pages/table";
import SiderBar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FormPost from "./components/FormPost";
import AllPost from "./components/AllPost";
import "bootstrap/dist/css/bootstrap.min.css";
import PostListProvider from "./store/store-posts-item.jsx";
function App() {
  const [clinks, setclinks] = useState("Home");
  return (
    <PostListProvider>
      <div className="flex">
        <SiderBar clinks={clinks} setclinks={setclinks} />
        <div className="container-fluid px-0">
          <Header />
          {clinks === "Home" && ""}
          {clinks === "Posts" && <AllPost />}
          {clinks === "Create Posts" && <FormPost setclinks={setclinks} />}
          <Footer />
        </div>
      </div>
      {/* <Table /> */}
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Calculator /> */}
    </PostListProvider>
  );
}

export default App;
