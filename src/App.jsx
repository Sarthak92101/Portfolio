
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Project from "./pages/projects";
import Teaching from "./pages/Teaching";

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/teaching" element={<Teaching />} />
      </Routes>

      <Footer/>



    </>
  );
}

export default App;
