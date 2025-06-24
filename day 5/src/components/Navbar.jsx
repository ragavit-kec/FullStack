import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className="navbar">
                    <li>s
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/Services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/Welcome'>Welcome</Link>
                    </li>
                    <li>
                        <Link to='/Skills'>Skills</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}
export default Navbar