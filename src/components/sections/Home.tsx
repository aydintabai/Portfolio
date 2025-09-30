import { motion } from "framer-motion";
import profilePic from "../../assets/gradPic.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import VaraText from "../VaraText";

const Home = () => {
  
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative mt-16 md:mt-0">
            <h1 className="sr-only">Aydin Tabatabai</h1>

            <motion.div
                className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.img
                    src={profilePic}
                    alt="Aydin Tabatabai"
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                />

                <div className="text-center md:text-left flex-1">
                    <motion.h1
                        className="text-5xl md:text-3xl font-semibold mb-3 leading-right -mt-6 md:mt-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Hi, I'm
                    </motion.h1>

                    <motion.div
                        className="mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <VaraText text="Aydin Tabatabai" />
                    </motion.div>

                    <motion.p
                        className="text-black-400 text-base text-lg mb-6 max-w-md mx-auto px-10 md:max-w-full md:mx-0 md:px-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        I am a passionate developer with experience in machine learning, software engineering, and data science.
                    </motion.p>

                    <motion.div
                        className="flex sm:flex-row gap-4 mb-6 justify-center md:justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <a
                            href="#about"
                            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                        >
                            Learn more
                        </a>
                        <a
                            href="/Aydin-Tabatabai-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                        >
                            View Resume
                        </a>
                    </motion.div>

                    <motion.div
                        className="flex justify-center md:justify-start gap-6 text-black-500 text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <a href="https://github.com/aydintabai" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:scale-120 transition-all duration-300" />
                        </a>
                        
                        <a href="https://linkedin.com/in/aydintabai" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:scale-120 transition-all duration-300" />
                        </a>

                        <a href="mailto:aydintabai@gmail.com">
                            <FaEnvelope className="hover:scale-120 transition-all duration-300" />
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
  };
  
  export default Home;