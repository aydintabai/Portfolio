import RevealOnScroll from "../RevealOnScroll";
import profilePic from "../../assets/headshot.jpeg";

const About = () => {

    return (
        <section id="about" className="scroll-mt-24 flex items-center justify-center">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4">
                    {/* Top: Bio and Image */}
                    <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                        {/* Text */}
                        <div className="flex-1 text-gray-800">
                            <h2 className="text-5xl font-bold mb-6">
                                About Me
                            </h2>
                            <p className="text-lg mb-4 leading-relaxed">
                                Hey! I'm Aydin, a senior at UC San Diego majoring in Cognitive Science with a specialization in Machine Learning and Neural Computation.
                                I've always enjoyed breaking things apart to see how they work and now I spend my time building intelligent tools that make people's lives easier.
                            </p>
                            <p className="text-lg leading-relaxed">
                                I've interned as an AI/ML engineer, fine-tuning LLMs and building full-stack features in real EMR systems. I'm passionate about using technology
                                to create meaningful, user-centered solutions and I'm always curious about what I can learn next.
                            </p>
                        </div>

                        {/* Image */}
                        <img
                        src={profilePic}
                        alt="Aydin Tabatabai"
                        className="w-60 h-60 rounded-xl object-cover shadow-lg"
                        />
                    </div>

                    <h2 className="text-3xl font-bold mb-6">
                        Skills
                    </h2>

                    {/* Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 text-lg">
                        <div>
                            <h3 className="text-lg font-bold text-base text-black mb-2">
                                Languages
                            </h3>
                            <p>
                                Python, Java, C/C++, SQL (Postgres), JavaScript, Swift, Bash, HTML/CSS, MATLAB
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-base text-black mb-2">
                                Libraries/Frameworks
                            </h3>
                            <p>
                                PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, FastAPI, SwiftUI
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-base text-black mb-2">
                                Tools/Technologies
                            </h3>
                            <p>
                                Git, Azure, LaTeX
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-base text-black mb-2">
                                Soft Skills
                            </h3>
                            <p>
                                Communication, Creative Problem Solving, Leadership
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
  };
  
  export default About;