import RevealOnScroll from "../RevealOnScroll";
import ProjectCard from "../ProjectCard";

import joseImage from "../../assets/jose.jpeg";
import deepImage from "../../assets/deep.jpeg";
import volleyImage from "../../assets/volley.jpeg";

const Projects = () => {
  
    return (
    <section id="projects" className="scroll-mt-24 flex items-center justify-center">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-15 text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProjectCard
              image={deepImage}
              title="Deep Learning Model Evaluation"
              subtitle="Developed and benchmarked 7 convolutional neural networks to explore the effects of architectural and training choices."
              link="https://github.com/aydintabai/Deep-Learning-Model-Evaluation"
              tags={["Python", "PyTorch", "Matplotlib"]}
            />
            <ProjectCard
              image={volleyImage}
              title="Volleyball RL"
              subtitle="AI agent trained in Gymnasium to play volleyball using 4 different Reinforcement Learning Algorithms."
              link="https://github.com/aydintabai/Volleyball-RL"
              tags={["Python", "PyTorch", "Gymnasium"]}
            />
            <ProjectCard
              image={joseImage}
              title="Supervised Learning Algorithm Comparison"
              subtitle="Designed and implemented experiments to evaluate the performance of Random Forest, SVM, and Logistic Regression on three UCI datasets."
              link="https://github.com/aydintabai/Supervised-Learning-Algorithm-Comparison"
              tags={["Python", "Scikit-learn", "Matplotlib"]}
            />
            <ProjectCard
              image={joseImage}
              title="AI Academic Impact Case Study"
              subtitle="Conducted a comprehensive analysis on university course dataset to assess the impact of AI tools on academic performance."
              link="https://github.com/aydintabai/AI-Academic-Impact-Case-Study"
              tags={["Python", "NumPy", "Seaborn"]}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
    );
};

export default Projects;
