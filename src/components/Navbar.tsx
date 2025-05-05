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
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Aydin Tabatabai
          </a>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>

            <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
              Experience
            </a>

            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
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

// const Navbar = () => {
//     return (
//       <nav className="fixed top-0 w-full bg-black shadow z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <a href="#home" className="text-xl font-bold">Aydin Tabatabai</a>
//           <div className="flex items-center space-x-6">
//             <a href="#about" className="hover:text-blue-500 transition">About</a>
//             <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
//             <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
  
            // <a
            //   href="/Aydin-Tabatabai-Resume.pdf"
            //   target="_blank"
            //   rel="noopener noreferrer"
            //   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            // >
            //   Resume
            // </a>
//           </div>
//         </div>
//       </nav>
//     );
//   };

export default Navbar;