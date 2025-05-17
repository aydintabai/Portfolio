import { useEffect } from "react";

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({menuOpen, setMenuOpen}: NavbarProps) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen]);


  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-black/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-semibold text-black">
            Aydin Tabatabai
          </a>

          <div className="w-7 h-9 text-lg relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-black-300 hover:text-blue-500 transition-colors">
              About
            </a>

            <a href="#experience" className="text-black-300 hover:text-blue-500 transition-colors">
              Experience
            </a>

            <a href="#projects" className="text-black-300 hover:text-blue-500 transition-colors">
              Projects
            </a>

            <a
              href="/Aydin-Tabatabai-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;