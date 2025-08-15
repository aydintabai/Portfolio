// src/components/Navbar.tsx
import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({menuOpen, setMenuOpen}: NavbarProps) => {
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/40 dark:bg-black/40 backdrop-blur-lg border-b border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-semibold text-black dark:text-white hover:text-blue-500 transition-colors">
            Aydin Tabatabai
          </a>

          <div 
            className="w-7 h-9 text-2xl relative cursor-pointer z-40 md:hidden" 
            onClick={() => setMenuOpen((prev) => !prev)} 
            aria-label="Open menu"
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-black-300 dark:text-white-300 hover:text-blue-500 transition-colors">
              About
            </a>

            <a href="#experience" className="text-black-300 dark:text-white-300 hover:text-blue-500 transition-colors">
              Experience
            </a>

            <a href="#projects" className="text-black-300 dark:text-white-300 hover:text-blue-500 transition-colors">
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

            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;