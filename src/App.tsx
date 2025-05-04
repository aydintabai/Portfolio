import "./App.css"
import "./index.css"

import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Home from "./components/sections/Home";

import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />

    </>
  )
}

export default App
