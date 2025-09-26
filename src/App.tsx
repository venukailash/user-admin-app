import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-indigo-50 to-indigo-100">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
