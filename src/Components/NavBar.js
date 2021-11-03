import {NavLink} from 'react-router-dom'
import DragonsLogo from './imgs/Dragons-Hoard-Text-White.png'
import './css/NavBar.css'

function NavBar() {

    
    return(
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                <div className="container-fluid">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link" id="selection-nav" exact to="/welcome">HOME</NavLink>
                            <NavLink className="nav-item nav-link" id="selection-nav" to="/collections">COLLECTIONS</NavLink>
                            <NavLink className="nav-item nav-link" id="selection-nav" to="/supplies">SUPPLIES</NavLink>
                            <NavLink className="nav-item nav-link" id="selection-nav" to="/boardgames">BOARDGAMES</NavLink>
                            <NavLink className="nav-item nav-link" id="selection-nav" to="/dnd">D&D</NavLink>
                            <NavLink className="nav-item nav-link" id="selection-nav" to="/contact">CONTACT</NavLink>
                        </div>
                    </div>
                    <NavLink className="navbar-brand mr-3 dragonlogo" id="nav-item title-nav" exact to="/welcome"><img src={DragonsLogo} alt="dragons hoard logo" /></NavLink>
                </div>    
            </nav>
        </>
    )
}

export default NavBar