import logo from "./logo.svg";
import "./App.css";
import Cars from "./pages/Cars";
import DetailCar from "./pages/DetailCar";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil" element={<Cars />} />
        <Route path="/detailmobil/:id" element={<DetailCar />} />
      </Routes>
    </div>
  );
}

export default App;
