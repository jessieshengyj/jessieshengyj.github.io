import "./Projects.scss";

function Projects() {
    return (
        <div className="projects space-y-8 pt-2 pb-10 max-w-3/5">
            <h2 className="text-3xl font-bold text-center">Projects</h2>

            {/* Termiknow Project */}
            <div className="hero bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    {/*<img src="/termiknow-logo.png" className="max-w-md rounded-lg shadow-2xl" alt="Termiknow"/>*/}
                    <div className="carousel rounded-box max-w-sm">
                        <div className="carousel-item w-full h-auto">
                            <img src="/img/project/termiknow-light.png" className="h-full w-auto max-w-full object-contain"
                                 alt="Termiknow Light Mode"/>
                        </div>
                        <div className="carousel-item w-full h-auto">
                            <img src="/img/project/termiknow-default.png" className="h-full w-auto max-w-full object-contain"
                                 alt="Termiknow Default Mode"/>
                        </div>
                        <div className="carousel-item w-full h-auto">
                            <img src="/img/project/termiknow-dark.png" className="h-full w-auto max-w-full object-contain"
                                 alt="Termiknow Dark Mode"/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-2xl font-bold">termiknow</h3>
                            <div className="flex gap-2">
                                <span className="text-xs bg-zinc-400 text-white px-2 py-1 rounded-md">nwHacks (Hackathon)</span>
                                <span className="text-xs bg-zinc-400 text-white px-2 py-1 rounded-md">Jan 2025</span>
                            </div>
                        </div>
                        <div>Developed termiknow, an offline terminal search tool in Python with fuzzy and
                            vector search using Chroma DB. Built a dynamic UI with Textual and Rich.
                        </div>
                        <div className="font-semibold">Awards: 1st place among 673 participants, Warp Sponsor Prize for
                            Best Developer Tool.
                        </div>
                        <div className="flex gap-1">
                            <a href="https://devpost.com/software/termiknow"
                               className="btn btn-ghost w-fit btn-sm flex items-center gap-2">
                                <img src="/icons/devpost.png" className="h-6" alt="Devpost"/>
                            </a>
                            <a href="https://github.com/jessieshengyj/termiknow"
                               className="btn btn-ghost w-fit btn-sm flex items-center gap-2">
                                <img src="/icons/github.png" className="h-6" alt="GitHub"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*/!* Toasters Project *!/*/}
            <div className="hero bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="carousel rounded-box max-w-sm">
                        <div className="carousel-item w-full h-auto">
                            <img src="/img/project/toasters-welcome.jpg" className="h-full w-auto max-w-full object-contain"
                                 alt="Toasters Welcome"/>
                        </div>
                        <div className="carousel-item w-full h-auto">
                            <img src="/img/project/toasters-login.png" className="h-full w-auto max-w-full object-contain"
                                 alt="Toasters Login"/>
                        </div>
                        <div className="carousel-item w-full h-auto">
                            <img src="/img/project/toasters-home.png" className="h-full w-auto max-w-full object-contain"
                                 alt="Toasters Home"/>
                        </div>
                        <div className="carousel-item w-full h-auto">
                            <img src="/img/project/toasters-make-toast.png" className="h-full w-auto max-w-full object-contain"
                                 alt="Toasters Make Toast"/>
                        </div>
                        <div className="carousel-item w-full h-auto">
                            <img src="/img/project/toasters-toast.png" className="h-full w-auto max-w-full object-contain"
                                 alt="Toasters Toast"/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-2xl font-bold">Toasters</h3>
                            <div className="flex gap-2">
                                <span className="text-xs bg-zinc-400 text-white px-2 py-1 rounded-md">youCode (Hackathon)</span>
                                <span className="text-xs bg-zinc-400 text-white px-2 py-1 rounded-md">Apr 2024</span>
                            </div>
                        </div>
                        <div>
                            Built a platform for customers to send appreciation messages ("toasts") to Arc'teryx employees.
                            Developed the front-end with React and Tailwind CSS, and the back-end with Express and
                            MongoDB.
                            Integrated Twilio for SMS notifications.
                        </div>
                        <div className="flex gap-1">
                            <a href="https://devpost.com/software/toasters"
                               className="btn btn-ghost w-fit btn-sm flex items-center gap-2">
                                <img src="/icons/devpost.png" className="h-6" alt="Devpost"/>
                            </a>
                            <a href="https://github.com/jessieshengyj/toasters"
                               className="btn btn-ghost w-fit btn-sm flex items-center gap-2">
                                <img src="/icons/github.png" className="h-6" alt="GitHub"/>
                            </a>
                            <a href="https://toasters.onrender.com/"
                               className="btn btn-ghost w-fit btn-sm flex items-center gap-2">
                                <img src="/icons/external-link.png" className="h-6" alt="Live Demo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="hero bg-base-200 rounded-lg">*/}
            {/*    <div className="hero-content flex-col lg:flex-row">*/}
            {/*        <img src="/toasters.png" className="max-w-sm rounded-lg shadow-2xl" alt="Toasters"/>*/}
            {/*        <div>*/}
            {/*            <h3 className="text-2xl font-bold">Toasters</h3>*/}
            {/*            <p className="py-2">A fun web app for rating and reviewing toasters.</p>*/}
            {/*            <a href="https://github.com/yourusername/toasters" className="btn btn-neutral">View Project</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<h2 className="text-3xl font-bold text-center">Projects</h2>*/}

            {/*/!* Termiknow Project *!/*/}
            {/*<div className="hero bg-base-200 rounded-lg">*/}
            {/*    <div className="hero-content flex-col lg:flex-row">*/}
            {/*        <img src="/termiknow.png" className="max-w-sm rounded-lg shadow-2xl" alt="Termiknow"/>*/}
            {/*        <div>*/}
            {/*            <h3 className="text-2xl font-bold">Termiknow</h3>*/}
            {/*            <p className="py-2">An interactive terminal-based learning platform.</p>*/}
            {/*            <a href="https://github.com/yourusername/termiknow" className="btn btn-neutral">View Project</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*/!* Toasters Project *!/*/}
            {/*<div className="hero bg-base-200 rounded-lg">*/}
            {/*    <div className="hero-content flex-col lg:flex-row">*/}
            {/*        <img src="/toasters.png" className="max-w-sm rounded-lg shadow-2xl" alt="Toasters"/>*/}
            {/*        <div>*/}
            {/*            <h3 className="text-2xl font-bold">Toasters</h3>*/}
            {/*            <p className="py-2">A fun web app for rating and reviewing toasters.</p>*/}
            {/*            <a href="https://github.com/yourusername/toasters" className="btn btn-neutral">View Project</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Projects;
