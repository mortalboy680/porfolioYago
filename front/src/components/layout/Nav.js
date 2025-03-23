import '../stylesLayout/nav.css';
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation(); // Hook para obtener la ubicación actual

    return (
        <nav className="navBar">
            <ul className="navBarUl">
                <Link to="/" className={location.pathname === "/" ? "navBarUlLi active" : "navBarUlLi"}><li className="navBarUlLi">Home</li></Link>
                <Link to="/experience" className={location.pathname === "/experience" ? "navBarUlLi active" : "navBarUlLi"}><li className="navBarUlLi">Experience</li></Link>
                <Link to="/proyect" className={location.pathname === "/proyect" ? "navBarUlLi active" : "navBarUlLi"}><li className="navBarUlLi">Contact</li></Link>
            </ul>
        </nav>
    );
};

export default Nav;