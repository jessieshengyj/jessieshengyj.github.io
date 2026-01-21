import { motion } from "framer-motion";

function About() {
    return (
        <div className="flex flex-col w-full overflow-hidden">

            {/* SECTION 1: The Hero (Full Screen) */}
            <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                        Jessie Sheng
                    </h1>
                    <p className="text-xl md:text-2xl opacity-70 max-w-lg mx-auto leading-relaxed">
                        Welcome to my personal website. <br />
                        Loading profile... (Scroll down)
                    </p>
                </motion.div>

                {/* Bouncing Scroll Arrow */}
                <motion.div
                    className="absolute bottom-10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </section>


            {/* SECTION 2: The Chat (Appears on Scroll) */}
            <section className="min-h-[80vh] flex flex-col justify-center items-center px-4 bg-base-200/30">

                <div className="w-full max-w-lg md:max-w-2xl">
                    {/* Wrapper for the animation trigger */}
                    <motion.div
                        className="chat chat-start"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="chat-image avatar avatar-online">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg">
                                <img
                                    alt="Jessie's Avatar"
                                    src="/icons/my-pfp.jpg"
                                />
                            </div>
                        </div>
                        <div className="chat-header mb-1">
                            Jessie Sheng
                            <time className="text-xs opacity-50 ml-2">Just now</time>
                        </div>
                        <div className="chat-bubble py-6 px-6 text-lg leading-relaxed shadow-md">
                            Hello! I'm Jessie, a 5th-year Computer Science student at the University of British Columbia, minoring in Data Science. I'm
                            passionate about software engineering, front-end development, and data-driven problem-solving.
                        </div>
                        <div className="chat-footer opacity-50 mt-1">Delivered</div>
                    </motion.div>
                </div>

            </section>
        </div>
    );
}

export default About;