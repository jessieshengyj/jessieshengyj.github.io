import "./Experience.scss";

function Experience() {
    return (
        <div className="flex flex-col items-center px-4 pt-4 pb-8">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>

            <ul className="timeline timeline-vertical w-full max-w-lg md:max-w-3/5">
                <li>
                    <div className="timeline-end font-mono italic text-sm tracking-wide">
                        Jul 2024 – Present
                    </div>

                    <div className="timeline-middle text-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="h-5 w-5">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>

                    <div className="timeline-start bg-base-100 p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                        <div className="font-bold text-lg">
                            Undergraduate Teaching Assistant @ UBC
                        </div>

                        <div className="font-semibold mt-3">
                            CPSC 304 – Introduction to Relational Databases
                        </div>
                        <div className="italic text-sm">2024W1</div>

                        <p className="mt-2 leading-relaxed">
                            Led tutorials on SQL, relational algebra, and normalization. Graded student projects using
                            PHP, JavaScript, and Oracle.
                        </p>

                        <div className="font-semibold mt-4">
                            CPSC 121 – Models of Computation
                        </div>
                        <div className="italic text-sm">2024S, 2024W2, 2025W1, 2025W2</div>
                    </div>
                    <hr className="bg-base-300"/>
                </li>

                <li>
                    <hr className="bg-base-300"/>
                    <div className="timeline-start font-mono italic text-sm tracking-wide">
                        May – Aug 2025
                    </div>

                    <div className="timeline-middle text-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="h-5 w-5">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>

                    <div className="timeline-end bg-base-100 p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                        <div className="font-bold text-lg">
                            Software Engineer Intern @ Arista Networks
                        </div>
                        <div className="mt-2 text-sm">
                            CloudVision · Topology Team ☁️
                        </div>

                        <p className="mt-3 leading-relaxed">
                            Led development of CloudVision’s Geo Mode using React, TypeScript, D3.js, and Mapbox.
                            Built a multi-domain network map with infinite panning, optimized rendering performance,
                            and wrote unit and Playwright E2E tests in a cross-team Agile environment.
                        </p>
                    </div>
                    <hr className="bg-base-300"/>
                </li>

                <li>
                    <hr className="bg-base-300"/>
                    <div className="timeline-end font-mono italic text-sm tracking-wide">
                        Sep 2023 – Aug 2024
                    </div>

                    <div className="timeline-middle text-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="h-5 w-5">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>

                    <div className="timeline-start bg-base-100 p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                        <div className="font-bold text-lg">
                            Software Engineer Intern @ Excelar
                        </div>
                        <div className="mt-2 text-sm">
                            Careflow Platform
                        </div>

                        <p className="mt-3 leading-relaxed">
                            Developed features for a healthcare analytics timeline in an Agile Scrum environment,
                            implementing UX designs and visualizing patient data using Angular, NgRx, RxJS, D3.js,
                            TypeScript, and Tailwind CSS.
                        </p>
                    </div>
                    <hr className="bg-base-300"/>
                </li>

                <li>
                    <hr className="bg-base-300"/>
                    <div className="timeline-start font-mono italic text-sm tracking-wide">
                        Sep 2022 – Dec 2023
                    </div>

                    <div className="timeline-middle text-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="h-5 w-5">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>

                    <div className="timeline-end bg-base-100 p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                        <div className="font-bold text-lg">
                            Undergraduate Teaching Assistant @ UBC
                        </div>
                        <div className="font-semibold mt-2">
                            CPSC 121 – Models of Computation
                        </div>
                        <div className="italic text-sm">
                            2022W1, 2022W2, 2023S, 2023W1
                        </div>

                        <p className="mt-2 leading-relaxed">
                            Taught and led lab sections, managed equipment, and graded assignments on discrete
                            mathematics and circuit logic.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Experience;
