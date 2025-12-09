import RevealOnScroll from "../RevealOnScroll";

const Experience = () => {
    
    const experiences = [
        {
            title: "Founding Software Engineer ",
            company: "HowDoIFill",
            date: "Jul 2025 - Present",
            description: [
                "Built the MVP of a mobile-first AI PDF editor, enabling users to scan, identify, and fill forms seamlessly via computer vision and intelligent field detection.",
                "Integrated multi-modal AI pipelines to auto-extract data from documents, support conversational form filling, and generate structured field mappings.",
                "Developed scalable backend services enabling secure document handling, real-time interactions, and reliable export and distribution workflows.",
                "Co-led product and engineering strategy, collaborating with cofounders to deliver user-focused features and reliable infrastructure."
            ],
            tech: ["Python", "FastAPI", "PostgreSQL", "React", "Git"],
        },
        {
            title: "Machine Learning / AI Engineer",
            company: "Soaper",
            date: "Jan 2025 - Jul 2025",
            description: [
                "Designed and implemented an end-to-end AI-powered physician response system, reducing message response time and processing daily patient interactions with pre-generated, context-aware suggestions.",
                "Developed a LoRA fine-tuning pipeline leveraging physician responses and feedback, continuously improving the model's accuracy and contextual relevance in response generation.",
                "Ensured HIPAA-compliant handling of patient data by implementing secure data pipelines, role-based access controls, and thorough test coverage to maintain reliability and privacy.",
                "Built an end-to-end clinical search tool for physicians to easily query across patient notes, labs, and imaging, improving the speed and accuracy of chart review."
            ],
            tech: ["Python", "PyTorch", "LoRA", "FastAPI", "PostgreSQL", "React", "Git"],
        },
    ];

    return (
        <section id="experience" className="scroll-mt-24 flex items-center justify-center pb-50">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-10 md:px-4">
                    <h2 className="text-5xl font-bold mb-15 text-center">Experience</h2>

                    {/* <div className="relative border-l border-gray-300 pl-6"> */}
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative mb-10">
                            {/* Experience Content */}
                            <div className="bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-semibold text-black dark:text-white">
                                        {exp.title} @<span className="text-blue-500"> {exp.company}</span>
                                    </h3>
                                    <span className="text-sm text-gray-500 dark:text-neutral-400">{exp.date}</span>
                                </div>

                                <ul className="list-disc list-inside text-gray-700 dark:text-neutral-300 mb-4 space-y-1 text-lg">
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
                {/* </div> */}
            </RevealOnScroll>
        </section>
    );
  };
  
  export default Experience;