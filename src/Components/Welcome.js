import React, {Component} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Iframe from 'react-iframe'
import ShopLinks from './ShopLinks'
import './css/Welcome.css'
import magiccarousel from './imgs/khm_key_1080p_en.jpg'
import pokecarousel from './imgs/vividvoltage.png'
import boardgame from './imgs/BMM3_Press.png'


export default class Welcome extends Component {
    constructor() {
        super()
    }
    
    render() {
        return(
            <>
            <NavBar />
            <div className="carousel-container fade-in">
                <div id="carousel-welcome" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={magiccarousel} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Buy Magic!</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={pokecarousel} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Buy Pokemon!</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={boardgame} className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Buy Board</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carousel-welcome" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-welcome" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
            </div>
            <br></br>
            <ShopLinks />
            <div className="tourney-info">
                <h3>Interested in Tournaments?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit turpis. Varius morbi enim nunc faucibus a pellentesque sit. Nec sagittis aliquam malesuada bibendum. Elit eget gravida cum sociis natoque penatibus.</p>
                <br></br>
                <h4>COVID-19 Information</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam ac tortor vitae. Dignissim convallis aenean et tortor at. Amet consectetur adipiscing elit duis. Elit pellentesque habitant morbi tristique senectus et.</p>
            </div>
            <div className="calendar">
            <iframe src="https://calendar.google.com/calendar/embed?src=dragonshordeslt%40gmail.com&ctz=America%2FLos_Angeles" style={{border: "0"}} width="800" height="600" frameborder="0" scrolling="no"></iframe>            </div>

            <div className="conduct">
                <h2>Code of Conduct</h2>
                <ul>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/1-key.png"/>Everyone should be treated with the same respect that they expect, including respect for spectators, customers, staff, and property. </li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/2-key.png"/>Clean up after yourself! This includes any games you may be playing, trash you may have produced, drinks, etc.</li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/3-key.png"/>Win or lose, be a good player and a good person. Play honest games and everyone has fun! Disrespectful behavior will not be tolerated</li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/4-key.png"/>Please don't block doorways or walkways. Be aware and respectful to your surroundings.</li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/5-key.png"/>Theft, bullying, illegal drug use, and unsportsman-like conduct will not be tolerated in the store.</li>
                </ul>
                <h3>Store Policy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Arcu vitae elementum curabitur vitae nunc sed velit. Maecenas accumsan lacus vel facilisis volutpat.</p>
            </div>
            <Footer />
            </>
        )
    }
}