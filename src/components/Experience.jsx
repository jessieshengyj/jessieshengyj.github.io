import "./Experience.scss";

function Experience() {
    return (
        <div className="experience flex flex-col items-center px-4">
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <ul className="timeline timeline-vertical w-full max-w-lg md:max-w-3/5">
                <li>
                    <div className="timeline-end font-mono italic text-sm">May 2025 – Aug 2025</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="h-5 w-5">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div className="timeline-start timeline-box">
                        <div className="font-bold text-base">[incoming] Software Engineer Intern @ Arista Networks</div>
                        <div className="mt-2">
                            CloudVision <span className="drop-shadow-sm">☁️</span>
                        </div>
                    </div>
                    <hr/>
                </li>
                <li>
                <hr/>
                    <div className="timeline-start font-mono italic text-sm">Jul 2024 – Present</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="h-5 w-5">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div className="timeline-end timeline-box">
                        <div className="font-bold text-base">Undergraduate Teaching Assistant @ UBC</div>
                        <div className="font-bold mt-2">CPSC 304 - Introduction to Relational Databases</div>
                        <div className="italic">2024W1</div>
                        <div className="mt-1">Led tutorials on SQL, relational algebra, and normalization. Graded
                            student projects using PHP, JavaScript, and Oracle.
                        </div>
                        <div className="font-bold mt-2.5">CPSC 121 - Models of Computation</div>
                        <div className="italic">2024S, 2024W2</div>
                    </div>
                    <hr/>
                </li>
                <li>
                <hr/>
                    <div className="timeline-end font-mono italic text-sm">Sep 2023 – Aug 2024</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="h-5 w-5">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div className="timeline-start timeline-box">
                        <div className="font-bold text-base">Software Engineer Intern @ Excelar</div>
                        <div className="mt-2">Front-end developer for Careflow Platform</div>
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-start font-mono italic text-sm">Sep 2022 – Dec 2023</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="h-5 w-5">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div className="timeline-end timeline-box">
                        <div className="font-bold text-base">Undergraduate Teaching Assistant @ UBC</div>
                        <div className="font-bold mt-2">CPSC 121 - Models of Computation</div>
                        <div className="italic">2022W1, 2022W2, 2023S, 2023W1</div>
                        <div className="mt-1">Taught and led lab sections, managed equipment (circuit boards,
                            breadboards, ICs, etc.), and graded student assignments on discrete mathematics and circuit
                            logic.
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Experience;
