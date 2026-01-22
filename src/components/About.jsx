import { motion } from "framer-motion";
import { useRef } from "react";

function About() {
    const chatRef = useRef(null);

    const scrollToChat = () => {
        chatRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    };

    // --- ANIMATION LOGIC ---

    // 1. "Jessie Sheng" - Types out letter by letter
    const nameSentence = "Jessie Sheng".split("");

    const nameContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.5
            }
        }
    };

    const nameLetter = {
        hidden: { display: "none" },
        visible: {
            display: "inline-block",
            transition: { duration: 0 }
        }
    };

    // 2. Spinner - Fades in after name is done
    const spinnerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delay: 2.0, duration: 0.5 }
        }
    };

    // 3. Standard Cards Animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const skills = [
        {
            category: "Languages & Core",
            items: ["Java", "Python", "C++", "C", "SQL", "JavaScript", "TypeScript", "PHP"]
        },
        {
            category: "Frameworks & Web",
            items: ["React", "Angular", "Tailwind CSS", "Node.js", "D3.js", "RxJS", "HTML/SCSS"]
        },
        {
            category: "Tools & Testing",
            items: ["Git/GitHub", "Playwright (E2E)", "Jira", "JUnit", "R / Tableau"]
        }
    ];

    return (
        <div className="flex flex-col w-full overflow-x-hidden">

            {/* SECTION 1: The Hero */}
            <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative">

                {/* 1. Name: Typewriter Effect + Monospace Font */}
                <motion.h1
                    // ADDED: font-mono for the typewriter look
                    className="text-5xl md:text-7xl font-bold font-mono mb-6 tracking-tight flex items-center justify-center"
                    variants={nameContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {nameSentence.map((letter, index) => (
                        <motion.span key={index} variants={nameLetter}>
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                    {/* Blinking Cursor */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-3 h-10 md:h-16 bg-neutral ml-2"
                    />
                </motion.h1>

                {/* 2. Subtext: Fade In */}
                <motion.p
                    className="text-xl md:text-2xl opacity-70 max-w-lg mx-auto leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                >
                    Welcome to my personal website.
                </motion.p>

                {/* 3. Loading Spinner (Replaces Text) */}
                <motion.div
                    className="flex flex-col items-center gap-2"
                    variants={spinnerVariant}
                    initial="hidden"
                    animate="visible"
                >
                    {/* DaisyUI Loading Spinner */}
                    <span className="loading loading-spinner loading-lg text-neutral opacity-50"></span>
                    <span className="text-sm font-mono opacity-50">Loading profile...</span>
                </motion.div>

                {/* 4. Clickable Scroll Arrow */}
                <motion.div
                    className="absolute bottom-20 cursor-pointer hover:opacity-100 transition-opacity"
                    onClick={scrollToChat}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5, y: [0, 10, 0] }}
                    transition={{ delay: 3.0, duration: 1.5, repeat: Infinity }}
                >
                    <div className="text-sm font-mono mb-2 opacity-70">(Scroll down)</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </section>


            {/* SECTION 2: The Chat */}
            <section
                ref={chatRef}
                className="min-h-[70vh] flex flex-col justify-center items-center px-4 bg-base-200/30"
            >
                <div className="w-full max-w-lg md:max-w-2xl">
                    <motion.div
                        className="chat chat-start"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
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


            {/* SECTION 3: Tech Stack */}
            <section className="min-h-[50vh] flex flex-col justify-center items-center px-6 pb-32">
                <motion.div
                    className="w-full max-w-5xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.h2 variants={cardVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Tech Stack
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="card-body items-center text-center">
                                    <h3 className="card-title text-xl mb-4">{skillGroup.category}</h3>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {skillGroup.items.map((item, i) => (
                                            <div key={i} className="badge badge-outline badge-lg p-3 font-medium text-sm">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>


            {/* SECTION 4: Beyond the Keyboard */}
            <section className="min-h-[50vh] flex flex-col justify-center items-center px-6 pt-20 pb-[20vh] bg-base-200/30">
                <motion.div
                    className="w-full max-w-4xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Beyond the Keyboard</h2>
                    <p className="text-lg opacity-70 mb-12 max-w-xl mx-auto">
                        When I'm not debugging code or studying, you can find me exploring the outdoors or capturing moments.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="card bg-base-100 shadow-lg p-6 flex flex-row items-center gap-4 hover:-translate-y-1 transition-transform">
                            <div className="text-4xl">📸</div>
                            <div>
                                <h3 className="font-bold text-xl">Photography</h3>
                                <p className="opacity-70 text-sm mt-1">Capturing moments on my digital camera.</p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-lg p-6 flex flex-row items-center gap-4 hover:-translate-y-1 transition-transform">
                            <div className="text-4xl">🏔️</div>
                            <div>
                                <h3 className="font-bold text-xl">Hiking</h3>
                                <p className="opacity-70 text-sm mt-1">Exploring the beautiful trails of BC.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}

export default About;