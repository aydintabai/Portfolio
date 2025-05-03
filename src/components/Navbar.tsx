const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full bg-black shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold">Aydin Tabatabai</a>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
  
            <a
              href="/Aydin-Tabatabai-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;