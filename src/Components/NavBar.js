import {NavLink} from 'react-router-dom'
import {useState} from 'react'

import './css/NavBar.css'

function NavBar() {

    
    return(
        <>
            {/* <nav className="navbar sticky-top">
                <div className="nav-title">
                    THE DRAGON'S HORDE
                </div>
                <div className="nav-items">
                    <NavLink id="nav-item" exact to="/welcome">HOME</NavLink>
                    <NavLink id="nav-item" to="/collections">COLLECTIONS</NavLink>
                    <NavLink id="nav-item" to="/boardgames">BOARDGAMES</NavLink>
                    <NavLink id="nav-item" to="/dnd">D&D</NavLink>
                    <NavLink id="nav-item" to="/contact">CONTACT US</NavLink>
                </div>
            </nav>
            <nav className="navbar nav-two navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                            <NavLink id="nav-item" exact to="/welcome">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink id="nav-item" to="/collections">COLLECTIONS</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink id="nav-item" to="/boardgames">BOARDGAMES</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink id="nav-item" to="/dnd">D&D</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink id="nav-item" to="/contact">CONTACT US</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="logo">
                            <p>THE DRAGONS HORDE</p>
                    </div>
                </div>
            </nav> */}
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
                    <NavLink className="navbar-brand mr-3" id="nav-item title-nav" exact to="/welcome">THE DRAGONS HORDE</NavLink>
                </div>    
            </nav>
        </>
    )
}

export default NavBar