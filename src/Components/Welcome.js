import React, {Component} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Discord from './Discord'
import Iframe from 'react-iframe'
import {Link} from 'react-router-dom'
import ShopLinks from './ShopLinks'
import './css/Welcome.css'
import boardgame from './imgs/boardgames.JPG'
import magiccarousel from './imgs/magic-cards.JPG'
import dndcarousel from './imgs/dnd_cosr_productimg2.png'


export default class Welcome extends Component {
    
    render() {
        return(
            <>
            <NavBar />
            <div className="carousel-container fade-in">
                <div id="carousel-welcome" className="carousel slide carousel-fade"  data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-welcome" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-welcome" data-slide-to="1"></li>
                        <li data-target="#carousel-welcome" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={magiccarousel} className="d-block w-100" alt="first card slide" />
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <button className="btn btn-danger "><Link to="/collections">View Collection</Link></button>
                        </div>
                        <div className="carousel-item">
                            <img src={dndcarousel} className="d-block w-100" alt="second card slide" />
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <button className="btn btn-danger "><Link to="/dnd"> View D&D Books</Link></button>
                        </div>
                        <div className="carousel-item">
                            <img src={boardgame} className="d-block w-100" alt="..." />
                        </div>   
                        <div class="carousel-caption d-none d-md-block">
                            <button className="btn btn-danger "><Link to="/boardgames"> View Board Games</Link></button>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-welcome" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-welcome" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <br></br>
            <ShopLinks />
            <Discord />
            <div className="tourney-info">
                <h3>Interested in Tournaments?</h3>
                <p>So are we! The Dragon's Hoard is happy to announce we are going to run official and mock tournaments for Magic the Gathering. Please refer to our calendar below for dates on tournament events, or feel free to give us a call for more information. </p>
                <br></br>
                <h4>COVID-19 Information</h4>
                <p>Please check local county and/or state mandates regarding oversight and advisories about  COVID-19 in the area. Additionally, it may be helpful to contact us directly to best understand what safety precautions and requirements we may have in place.</p>
            </div>
            <div className="calendar"> 
            <Iframe src="https://calendar.google.com/calendar/embed?src=dragonshoardslt%40gmail.com&ctz=America%2FLos_Angeles" style={{border: "0"}} width="800" height="600" frameborder="0" scrolling="no"/>   
            </div>

            <div className="conduct">
                <h2>Code of Conduct</h2>
                <ul>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/1-key.png" alt="1key"/>Everyone should be treated with the same respect that they expect, including respect for spectators, customers, staff, and property. </li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/2-key.png" alt="2key"/>Clean up after yourself! This includes any games you may be playing, trash you may have produced, drinks, etc.</li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/3-key.png" alt="3key"/>Win or lose, be a good player and a good person. Play honest games and everyone has fun! Disrespectful behavior will not be tolerated</li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/4-key.png" alt="4key"/>Please don't block doorways or walkways. Be aware and respectful to your surroundings.</li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/5-key.png" alt="5key"/>Theft, bullying, illegal drug use, and unsportsman-like conduct will not be tolerated in the store.</li>
                </ul>
                <div className="page-end">
                    
                </div>
                <br></br>
                <div className="store-policy">
                    <h3>Store Policy</h3>
                    <p>All sales and trades are final. Trades between players is generally permitted (cards only, no cash trades), but employees reserve all rights to disallow player to player trade for any reason.</p>
                </div>
               
                
            </div>
            <Footer />
            </>
        )
    }
}