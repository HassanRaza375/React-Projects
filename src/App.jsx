import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeCarItem from "./pages/HomeCarItem";
import CartItems from "./pages/CartItem";
import NewItem from "./pages/NewItem";
import Counter from "./pages/counter";
import NoMatch from "./pages/NoMatch";
import ChartsCombine from "./components/Charts/ChartsCombine";
const Redirector = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      navigate("/Charts");
    }, 7000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return null;
};
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Redirector />} />
          <Route element={<HomeCarItem />}>
            <Route path="/Charts" element={<ChartsCombine />} />
            <Route path="/add-item/*" element={<NewItem />} />
            <Route path="/cart-item" element={<CartItems />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
      {/* <Counter /> */}
      {/* <Clock /> */}
      {/* <Posts /> */}
      {/* <Table /> */}
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Calculator /> */}
    </>
  );
};

export default App;
