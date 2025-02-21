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
                        <div className="carousel-item w-auto h-60">
                            <img src="/termiknow-light.png" className="w-full" alt="Termiknow Light Mode"/>
                        </div>
                        <div className="carousel-item w-auto h-60">
                            <img src="/termiknow-default.png" className="w-full" alt="Termiknow Default Mode"/>
                        </div>
                        <div className="carousel-item w-auto h-60">
                            <img src="/termiknow-dark.png" className="w-full" alt="Termiknow Dark Mode"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-2xl font-bold">termiknow</h3>
                            <span className="text-xs bg-zinc-400 text-white px-2 py-1 rounded-md">nwHacks (Hackathon)</span>
                        </div>
                        <div className="">Developed termiknow, an offline terminal search tool in Python with fuzzy and vector
                            search using Chroma DB. Built a dynamic UI with Textual and Rich.
                        </div>
                        <div className="font-semibold">Awards: 1st place among 673 participants, Warp Sponsor Prize for
                            Best Developer Tool.
                        </div>
                        <div className="flex gap-4">
                            <a href="https://devpost.com/software/termiknow"
                               className="btn btn-neutral theme-dark:btn-primary w-fit btn-sm">Devpost</a>
                            <a href="https://github.com/jessieshengyj/termiknow"
                               className="btn btn-neutral w-fit btn-sm">Github</a>
                        </div>
                    </div>
                </div>
            </div>

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
