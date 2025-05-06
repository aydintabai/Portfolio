import RevealOnScroll from "../RevealOnScroll";

const About = () => {
    
    const frontendSkills = ["React", "TypeScript", "JavaScript", "TailwindCSS"]
    const backendSkills = ["Python", "Azure", "SQL", "PyTorch"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-black/50 border hover:-translate-y-1 transition-all">
                        <p className="text-black-300 mb-6">
                            I am a passionate developer who has experience in machine learning, software engineering, and data science.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Frontend
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) =>(
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Backend
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) =>(
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-black/50 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                🏫 Education
                            </h3>

                            <ul className="list-disc list-inside text-black-300 space-y-2">
                                <li>
                                    <strong> B.S. in Cognitive Science, with a specialization in Machine Learning </strong> - University of California, San Diego (2025)
                                </li>

                                <li>
                                    Relevant Coursework: Data Structures & Algorithms, Deep Learning, AI Algorithms...
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-black/50 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                💼 Work Experience
                            </h3>

                            <div className="space-y-4 text-black-300">
                                <div>
                                    <h4 className="font-semibold">
                                        Machine Learning/AI Intern @ Soaper (Jan 2025 - Present)
                                    </h4>

                                    <p>
                                        Fine-tuned LLMs using LoRA to generate structured medical responses, using synthetic training datasets.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
  };
  
  export default About;