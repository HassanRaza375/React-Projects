import React from "react";
import ReactDOM from "react-dom/client";
// import App  from "./App.jsx";
import App from "./Aps.jsx";
import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import counterStore from "./store/index.js";
// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/Home",
//         element: <Home />,
//         loader: postLoader,
//       },
//       {
//         path: "/All-posts",
//         element: <AllPost />,
//       },
//       {
//         path: "/Add-posts",
//         element: <FormPost />,
//       },
//     ],
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
