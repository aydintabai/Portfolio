import RevealOnScroll from "../RevealOnScroll";

const Experience = () => {
    
    const experiences = [
        {
            title: "Machine Learning / AI Intern",
            company: "Soaper LLC",
            date: "Jan 2025 – Present",
            description: [
                "Fine-tuned multiple LLM models using LoRA to generate structured medical responses, leveraging Azure OpenAI to generate custom synthetic training datasets.",
                "Improved model accuracy, consistency, and clinical alignment through iterative prompt engineering, data refinement, and validation set evaluation.",
                "Built a FastAPI search endpoint using PostgreSQL full-text indexing to retrieve medical notes, labs, and imaging results, while creating Pytest tests to validate search results."
            ],
            tech: ["Python", "PyTorch", "LoRA", "FastAPI", "PostgreSQL", "React", "Git"],
        },
        ];

    return (
        <section id="experience" className="flex items-center justify-center pt-50">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-15 text-center">Experience</h2>

                    <div className="relative border-l border-gray-300 pl-6">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative">
                                {/* Experience Content */}
                                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-semibold text-black">
                                            {exp.title} @<span className="text-blue-500"> {exp.company}</span>
                                        </h3>
                                        <span className="text-sm text-gray-500">{exp.date}</span>
                                    </div>

                                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 text-lg">
                                        {exp.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((skill, i) => (
                                            <span
                                            key={i}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                            >
                                            {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
  };
  
  export default Experience;