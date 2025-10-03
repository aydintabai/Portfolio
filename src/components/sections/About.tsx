import RevealOnScroll from "../RevealOnScroll";
import profilePic from "../../assets/headshot.jpeg";

const About = () => {

    return (
        <section id="about" className="scroll-mt-53 flex items-center justify-center pb-50 pt-30 md:pt-0">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-10 md:px-4">
                    {/* Top: Bio and Image */}
                    <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                        {/* Text */}
                        <div className="flex-1">
                            <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">
                                About Me
                            </h2>
                            <p className="text-lg mb-4 leading-relaxed text-gray-700 dark:text-neutral-300">
                                Hello! I'm Aydin, a UC San Diego alumnus who majored in Cognitive Science with a specialization in Machine Learning and minors in both Computer Science and General Biology.
                                I've always been curious about how things work and now I spend my time building intelligent tools that make people's lives easier.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700 dark:text-neutral-300">
                                Most recently, I've been a founding engineer at LucidFill and an AI/ML engineer at Soaper, developing full-stack and AI driven features in end-to-end systems. I'm passionate about using technology
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

                    <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                        Skills
                    </h2>

                    {/* Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg">
                        <div>
                            <h3 className="text-lg font-bold text-base mb-2 text-black dark:text-white">
                                Languages
                            </h3>
                            <p className="text-gray-700 dark:text-neutral-300">
                                Python, Java, C/C++, SQL (Postgres), JavaScript/TypeScript, Swift, Bash, HTML/CSS, MATLAB
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-base text-black mb-2 text-black dark:text-white">
                                Libraries/Frameworks
                            </h3>
                            <p className="text-gray-700 dark:text-neutral-300">
                                PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, FastAPI, React, SwiftUI, Tailwind CSS
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-base text-black mb-2 text-black dark:text-white">
                                Tools/Technologies
                            </h3>
                            <p className="text-gray-700 dark:text-neutral-300">
                                Git, GitHub, Azure, Google Cloud, LaTeX
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-base text-black mb-2 text-black dark:text-white">
                                Soft Skills
                            </h3>
                            <p className="text-gray-700 dark:text-neutral-300">
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