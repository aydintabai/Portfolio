import RevealOnScroll from "../RevealOnScroll";
import profilePic from "../../assets/headshot.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import VaraText from "../VaraText";

const Home = () => {
  
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <img
                        src={profilePic}
                        alt="Aydin Tabatabai"
                        className="w-48 h-48 mx-auto mb-6 rounded-full shadow-lg object-cover"
                    />

                    <h1 className="text-5xl md:text-7xl font-semibold mb-3 leading-right">
                        Hi, I'm
                    </h1>

                    <div className="flex justify-center pl-10 pt-4 mt-3">
                        <VaraText text="Aydin Tabatabai"/>
                    </div>

                    <p className="text-black-400 text-lg mb-8 max-w-lg mx-auto">
                        I am a passionate developer who has experience in machine learning, software engineering, and data science.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a href="mailto:aydin.tabai@gmail.com" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Let's talk →
                        </a>

                        <a href="#projects" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            View Projects
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 text-black-500 text-2xl pt-6">
                        <a href="https://github.com/aydintabai" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:scale-120 transition-all duration-300" />
                        </a>
                        <a href="https://linkedin.com/in/aydintabai" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:scale-120 transition-all duration-300" />
                        </a>
                        <a href="mailto:aydintabai@gmail.com">
                            <FaEnvelope className="hover:scale-120 transition-all duration-300" />
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
  };
  
  export default Home;