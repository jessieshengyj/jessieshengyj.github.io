import { motion } from "framer-motion";

function Experience() {
    // --- TYPEWRITER ANIMATION VARIANTS ---
    const headingText = "Work Experience".split("");

    const headingContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const headingLetter = {
        hidden: { display: "none" },
        visible: {
            display: "inline-block",
            transition: { duration: 0 }
        }
    };

    const lineVariant = {
        hidden: { width: 0 },
        visible: {
            width: "6rem",
            transition: { delay: 2.0, duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className="flex flex-col items-center px-4 pt-10 pb-20 overflow-x-hidden">

            {/* HEADER */}
            {/* FIX: Added 'min-h-[6rem]' to reserve space so layout doesn't jump */}
            <div className="mb-16 text-center flex flex-col items-center min-h-[6rem] justify-end">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4 font-mono flex gap-0.5 items-end"
                    variants={headingContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {headingText.map((letter, index) => (
                        <motion.span key={index} variants={headingLetter}>
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                    {/* Blinking Cursor */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-3 h-8 md:h-10 bg-neutral ml-1 mb-1"
                    />
                </motion.h2>

                <motion.div
                    className="h-1 bg-neutral opacity-50 rounded-full"
                    variants={lineVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                />
            </div>

            {/* TIMELINE */}
            <ul className="timeline timeline-vertical w-full max-w-6xl">

                {/* ---------------------------------------------
                   ITEM 1: TA (Current)
                   --------------------------------------------- */}
                <li>
                    <div className="timeline-middle text-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
                        </svg>
                    </div>

                    <div className="timeline-end mb-10">
                        <div className="font-mono italic text-sm tracking-wide opacity-70">
                            Jul 2024 – Present
                        </div>
                    </div>

                    <motion.div
                        className="timeline-start mb-10 p-6 rounded-xl bg-base-100 shadow-md w-full md:w-[32rem] border border-base-200"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="font-bold text-xl text-neutral">
                            Undergraduate Teaching Assistant @ UBC
                        </div>

                        {/* Course 1: CPSC 121 */}
                        <div className="font-bold text-lg mt-4">
                            CPSC 121 – Models of Computation
                        </div>
                        <div className="italic text-sm opacity-70">2024S, 2024W2, 2025W1, 2025W2</div>

                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="badge badge-xs badge-outline opacity-60">Teaching</span>
                            <span className="badge badge-xs badge-outline opacity-60">Discrete Math</span>
                            <span className="badge badge-xs badge-outline opacity-60">Circuit Analysis</span>
                        </div>

                        {/* Course 2: CPSC 304 */}
                        <div className="font-bold text-lg mt-6">
                            CPSC 304 – Introduction to Relational Databases
                        </div>
                        <div className="italic text-sm opacity-70">2024W1</div>
                        <p className="mt-2 text-sm leading-relaxed opacity-90">
                            Led tutorials on SQL, relational algebra, and normalization. Graded student projects using PHP, JavaScript, and Oracle.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="badge badge-xs badge-outline opacity-60">SQL</span>
                            <span className="badge badge-xs badge-outline opacity-60">PHP</span>
                            <span className="badge badge-xs badge-outline opacity-60">Oracle</span>
                        </div>
                    </motion.div>
                    <hr className="bg-base-300"/>
                </li>


                {/* ---------------------------------------------
                   ITEM 2: Arista
                   --------------------------------------------- */}
                <li>
                    <hr className="bg-base-300"/>
                    <div className="timeline-middle text-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
                        </svg>
                    </div>

                    <div className="timeline-start mb-10 md:text-right">
                        <div className="font-mono italic text-sm tracking-wide opacity-70">
                            May – Aug 2025
                        </div>
                    </div>

                    <motion.div
                        className="timeline-end mb-10 p-6 rounded-xl bg-base-100 shadow-md w-full md:w-[32rem] border border-base-200"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="font-bold text-xl text-neutral">
                            Software Engineer Intern @ Arista Networks
                        </div>
                        <div className="font-semibold text-sm opacity-80 mt-1">
                            CloudVision · Topology Team ☁️
                        </div>
                        <p className="mt-3 text-sm leading-relaxed opacity-90">
                            Led development of CloudVision’s Geo Mode using React, TypeScript, D3.js, and Mapbox.
                            Built a multi-domain network map with infinite panning, optimized rendering performance,
                            and wrote unit and Playwright E2E tests in a cross-team Agile environment.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="badge badge-sm badge-outline opacity-70">React</span>
                            <span className="badge badge-sm badge-outline opacity-70">TypeScript</span>
                            <span className="badge badge-sm badge-outline opacity-70">D3.js</span>
                            <span className="badge badge-sm badge-outline opacity-70">Mapbox</span>
                        </div>
                    </motion.div>
                    <hr className="bg-base-300"/>
                </li>


                {/* ---------------------------------------------
                   ITEM 3: Excelar
                   --------------------------------------------- */}
                <li>
                    <hr className="bg-base-300"/>
                    <div className="timeline-middle text-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
                        </svg>
                    </div>

                    <div className="timeline-end mb-10">
                        <div className="font-mono italic text-sm tracking-wide opacity-70">
                            Sep 2023 – Aug 2024
                        </div>
                    </div>

                    <motion.div
                        className="timeline-start mb-10 p-6 rounded-xl bg-base-100 shadow-md w-full md:w-[32rem] border border-base-200"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="font-bold text-xl text-neutral">
                            Software Engineer Intern @ Excelar
                        </div>
                        <div className="font-semibold text-sm opacity-80 mt-1">
                            Careflow Platform
                        </div>
                        <p className="mt-3 text-sm leading-relaxed opacity-90">
                            Developed features for a healthcare analytics timeline in an Agile Scrum environment,
                            implementing UX designs and visualizing patient data using Angular, NgRx, RxJS, D3.js,
                            TypeScript, and Tailwind CSS.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="badge badge-sm badge-outline opacity-70">Angular</span>
                            <span className="badge badge-sm badge-outline opacity-70">RxJS</span>
                            <span className="badge badge-sm badge-outline opacity-70">D3.js</span>
                            <span className="badge badge-sm badge-outline opacity-70">Tailwind</span>
                        </div>
                    </motion.div>
                    <hr className="bg-base-300"/>
                </li>


                {/* ---------------------------------------------
                   ITEM 4: TA (Past)
                   --------------------------------------------- */}
                <li>
                    <hr className="bg-base-300"/>
                    <div className="timeline-middle text-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
                        </svg>
                    </div>

                    <div className="timeline-start mb-10 md:text-right">
                        <div className="font-mono italic text-sm tracking-wide opacity-70">
                            Sep 2022 – Dec 2023
                        </div>
                    </div>

                    <motion.div
                        className="timeline-end mb-10 p-6 rounded-xl bg-base-100 shadow-md w-full md:w-[32rem] border border-base-200"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="font-bold text-xl text-neutral">
                            Undergraduate Teaching Assistant @ UBC
                        </div>
                        <div className="font-bold text-lg mt-3">
                            CPSC 121 – Models of Computation
                        </div>
                        <div className="italic text-sm opacity-70">
                            2022W1, 2022W2, 2023S, 2023W1
                        </div>
                        <p className="mt-2 text-sm leading-relaxed opacity-90">
                            Taught and led lab sections, managed equipment, and graded assignments on discrete
                            mathematics and circuit logic.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="badge badge-sm badge-outline opacity-70">Teaching</span>
                            <span className="badge badge-sm badge-outline opacity-70">Logic</span>
                        </div>
                    </motion.div>
                </li>
            </ul>
        </div>
    );
}

export default Experience;