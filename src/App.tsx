import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-indigo-50 to-indigo-100">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/details" element={<Details />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
