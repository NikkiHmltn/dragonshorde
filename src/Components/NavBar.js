import {Link, NavLink} from 'react-router-dom'
import './css/NavBar'

function NavBar() {
    return(
        <>
            <nav>
                <NavLink to="/" />
                <NavLink to="/Cards" />
                <NavLink to="/BoardGames" />
                <NavLink to="/Contact Us" />
            </nav>
        </>
    )
}

export default NavBar