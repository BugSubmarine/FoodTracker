import "../styles.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (

        <header className="header" >
            <div className="flex-container">
                <nav className="nav">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <Link className="nav_link" to="/log">Progress</Link>
                        </li>
                        <li className="nav_item">
                            <Link className="nav_link" to="/log">Dashboard</Link>
                        </li>
                        <li className="nav_item">
                            <Link className="nav_link" to="/log">Goal</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Header;