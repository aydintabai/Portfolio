import { useEffect, useState } from "react";

const sections = ["home", "about", "experience", "projects"];

const ScrollDots = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            current = id;
            break;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-3">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-2.5 h-2.5 rounded-full transition-all ${
            active === id ? "bg-gray-500" : "bg-gray-400 opacity-40"
          }`}
          aria-label={`Scroll to ${id}`}
        />
      ))}
    </div>
  );
};

export default ScrollDots;
