import RevealOnScroll from "../RevealOnScroll";
import profilePic from "../../assets/headshot.jpeg";

const About = () => {

    return (
        <section id="about" className="scroll-mt-24 flex items-center justify-center pb-50 pt-30 md:pt-0">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-10 md:px-4">
                    {/* Top: Bio and Image */}
                    <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                        {/* Text */}
                        <div className="flex-1 text-gray-800">
                            <h2 className="text-5xl font-bold mb-6">
                                About Me
                            </h2>
                            <p className="text-lg mb-4 leading-relaxed">
                                Hello! I'm Aydin, a senior at UC San Diego majoring in Cognitive Science with a specialization in Machine Learning and pursuing minors in Computer Science and General Biology.
                                I've always been curious about how things work and now I spend my time building intelligent tools that make people's lives easier.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Most recently, I've interned as an AI/ML engineer at Soaper LLC, fine-tuning large language models and developing full-stack features in production EMR systems. I'm passionate about using technology
                                to create innovative, meaningful solutions and I'm always curious about what I can learn next.
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
                                Python, Java, C/C++, SQL (Postgres), JavaScript/TypeScript, Swift, Bash, HTML/CSS, MATLAB
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-base text-black mb-2">
                                Libraries/Frameworks
                            </h3>
                            <p>
                                PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, FastAPI, React, SwiftUI
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-base text-black mb-2">
                                Tools/Technologies
                            </h3>
                            <p>
                                Git, GitHub, Azure, LaTeX
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