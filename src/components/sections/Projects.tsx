import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-black/50 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                Deep Learning Model Evaluation
                            </h3>

                            <p className="text-black-400 mb-4">
                                Developed and benchmarked 7 convolutional neural network models to explore the effects of architectural and training choices.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "PyTorch", "Matplotlib", "Git"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-500 hover:text-blue-300 transition colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-black/50 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                Supervised Learning Algorithm Comparison
                            </h3>

                            <p className="text-black-400 mb-4">
                                Designed and implemented experiments to evaluate the performance of Random Forest, SVM, and Logistic Regression on three UCI datasets.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Scikit-learn", "Matplotlib", "Git"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-500 hover:text-blue-300 transition colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-black/50 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                AI Academic Impact Case Study
                            </h3>

                            <p className="text-black-400 mb-4">
                                Conducted a comprehensive analysis on university course dataset to assess the impact of AI tools on academic performance.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "NumPy", "Seaborn", "Git"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-500 hover:text-blue-300 transition colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-black/50 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                Volleyball RL
                            </h3>

                            <p className="text-black-400 mb-4">
                                Developed and trained an AI agent to play volleyball using different reinforcement learning algorithms in OpenAI Gymnasium.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "PyTorch", "Gymnasium", "Git"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-500 hover:text-blue-300 transition colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
  };
  
  export default Projects;