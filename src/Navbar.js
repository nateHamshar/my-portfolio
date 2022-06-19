import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="Navbar">
            <ul className="nav-list">
                <li><a href="#welcome" className="nav-links">Top</a></li>
                <li><a href="#about" className="nav-links">About</a></li>
                <li><a href="#skills" className="nav-links">Skills</a></li>
                <li><a href="#projects" className="nav-links">Projects</a></li>
            </ul>
        </div>
    );
}
 
export default Navbar;