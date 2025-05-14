import "./App.css"
import "./index.css"

import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import ScrollDots from "./components/ScrollDots";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <ScrollDots />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}

export default App
