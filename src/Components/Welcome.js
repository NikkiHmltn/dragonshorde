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
            <div className="carousel-container">
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
            <Iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23A79B8E&amp;ctz=America%2FLos_Angeles&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;title=Events" style={{border: "solid 1px #777"}} width="800" height="600" frameborder="0" scrolling="no"/>
            </div>

            <div className="conduct">
                <h2>Code of Conduct</h2>
                <ul>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/1-key.png"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/2-key.png"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/3-key.png"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/4-key.png"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                    <li><img src="https://img.icons8.com/ios-glyphs/30/000000/5-key.png"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                </ul>
                <h3>Store Policy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Arcu vitae elementum curabitur vitae nunc sed velit. Maecenas accumsan lacus vel facilisis volutpat.</p>
            </div>
            <Footer />
            </>
        )
    }
}