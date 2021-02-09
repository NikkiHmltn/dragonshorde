import {Link, NavLink} from 'react-router-dom'
import './css/NavBar.css'

function NavBar() {
    return(
        <>
            <nav className="navbar sticky-top">
                <div className="nav-title">
                    THE DRAGON'S HORDE
                </div>
                <div className="nav-items">
                    <NavLink id="nav-item" exact to="/">HOME</NavLink>
                    <NavLink id="nav-item" to="/cards">COLLECTIONS</NavLink>
                    <NavLink id="nav-item" to="/boardgames">BOARDGAMES</NavLink>
                    <NavLink id="nav-item" to="/contact">CONTACT US</NavLink>
                </div>

            </nav>
        </>
    )
}

export default NavBar