import RevealOnScroll from "../RevealOnScroll";

const Experience = () => {
    
    return (
        <section id="experience" className="flex items-center justify-center pt-50">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Experience
                    </h2>

                    <div className="rounded-xl p-8 border-black/50 border transition-all">
                        <h4 className="font-semibold">
                            Machine Learning/AI Intern @ Soaper (Jan 2025 - Present)
                        </h4>
                        
                        <p className="text-black-300 mb-6">
                            Fine-tuned LLMs using LoRA to generate structured medical responses, using synthetic training datasets.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "PyTorch", "LoRA", "Git"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
  };
  
  export default Experience;