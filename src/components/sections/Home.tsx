import RevealOnScroll from "../RevealOnScroll";
import profilePic from "../../assets/headshot.jpeg";

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
                    
                    <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-right">
                        Hi, I'm Aydin Tabatabai
                    </h1>

                    <p className="text-black-400 text-lg mb-8 max-w-lg mx-auto">
                        I am a passionate developer who has experience in machine learning, software engineering, and data science.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a href="#experience" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            View Experience
                        </a>

                        <a href="#projects" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            View Projects
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
  };
  
  export default Home;