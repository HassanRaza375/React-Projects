import "./App.css";
// import Todo from "./pages/todo";
// import Counter from "./components/counter";
// import Calculator from "./pages/calculator";
// import Table from "./pages/table";
import Table from "./pages/table";
import SiderBar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="flex">
        <SiderBar />
        <div className="container-fluid px-0">
          <Header />
          <Footer />
        </div>
      </div>
      {/* <Table /> */}
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Calculator /> */}
    </>
  );
}

export default App;
