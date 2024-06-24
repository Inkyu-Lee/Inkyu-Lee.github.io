import React from "react";
//import { BrowserRouter as Router, Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
//import { HashRouter as Router, Routes, Route, HashRouter} from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import History from "./pages/History";
import Navbarelements from "./components/Navbarelements";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Testpage from "./pages/Testpage";
import Project from "./pages/Project";

function App() {
  return (
    // <div className="App">
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    //   <Navbarelements />
    //   <Routes>
        // <Route path="/" element={<Home/>} />
        // <Route path="/About" element={<About/>} />
        // <Route path="/History" element={<History/>} />
        // <Route path="/Resume" element={<Resume/>} />
        // <Route path="/Gallery" element={<Gallery />} />
        // <Route path="/TestPage" element={<Testpage />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    // </div>

    <div className="App">
      <HashRouter>
        <Navbarelements />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/History" element={<History/>} />
            <Route path="/Resume" element={<Resume/>} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/TestPage" element={<Testpage />} />
            <Route path="/Project" element={<Project />} />
          </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
