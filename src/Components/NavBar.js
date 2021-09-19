import {NavLink} from 'react-router-dom'

import './css/NavBar.css'

function NavBar() {

    
    return(
        <>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="container-fluid">
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav">
                            <NavLink className="nav-item nav-link" id="selection-nav" exact to="/welcome">HOME</NavLink>
                            <NavLink className="nav-item nav-link" id="selection-nav" to="/collections">COLLECTIONS</NavLink>
                            <NavLink className="nav-item nav-link" id="selection-nav" to="/boardgames">BOARDGAMES</NavLink>
                            <NavLink className="nav-item nav-link" id="selection-nav" to="/dnd">D&D</NavLink>
                            <NavLink className="nav-item nav-link" id="selection-nav" to="/contact">CONTACT US</NavLink>
                        </div>
                    </div>
                    <NavLink className="navbar-brand mr-3" id="nav-item title-nav" exact to="/welcome">THE DRAGONS HOARD</NavLink>
                </div>    
            </nav>
        </>
    )
}

export default NavBar