type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = ({menuOpen, setMenuOpen}: NavbarProps) => {

  return (
    <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300 ease-in-out
                    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                    `}
    >
        <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
            &times;
        </button>

        <a href="#about" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                                                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                                                                        `}
        >
            About
        </a>

        <a href="#experience" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                                                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                                                                        `}
        >
            Experience
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                                                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                                                                        `}
        >
            Projects
        </a>

        <a href="/Aydin-Tabatabai-Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className={`bg-blue-500 text-2xl px-4 py-2 rounded-full font-semibold text-white my-4 transform transition-transform duration-300
                                                                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                                                                        `}
        >
            Resume
        </a>
    </div>
  );
};

export default MobileMenu;