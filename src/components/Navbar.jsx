import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="navbar bg-base-100 pl-4">
            <div className="flex-1">
                <img
                    src="/my-icon.png"
                    alt="Logo"
                    className="h-10 w-auto cursor-pointer"
                    onClick={() => navigate("/")}
                />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a onClick={() => navigate("/about")}>About</a></li>
                    <li><a onClick={() => navigate("/experience")}>Experience</a></li>
                    <li><a onClick={() => navigate("/projects")}>Projects</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

