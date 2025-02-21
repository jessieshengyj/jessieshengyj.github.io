import "./About.scss";

function About() {
    return (
        <div className="about flex justify-center px-4">
            <div className="chat chat-start w-full max-w-lg md:max-w-53/100">
                <div className="chat-image avatar avatar-online ml-10">
                    <div className="w-32 h-32 rounded-full">
                        <img
                            alt="Jessie's Avatar"
                            src="/my-pfp.jpg"
                        />
                    </div>
                </div>
                <div className="chat-header">
                    Jessie Sheng
                    <time className="text-xs opacity-50">Now</time>
                </div>
                <div className="chat-bubble py-5 px-5">
                    Hello! I'm Jessie, a 4th-year Computer Science student at the University of British Columbia, minoring in Data Science. I'm
                    passionate about software engineering, front-end development, and data-driven problem-solving. 🌱
                </div>
                <div className="chat-footer opacity-50">Delivered</div>
            </div>
        </div>
    );
}

export default About;

