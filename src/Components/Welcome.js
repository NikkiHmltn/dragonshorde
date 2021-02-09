import React, {Component} from 'react'
import './css/Welcome.css'
import magiccarousel from './imgs/khm_key_1080p_en.jpg'
import pokecarousel from './imgs/vividvoltage.png'
import boardgame from './imgs/BMM3_Press.png'

export default class Welcome extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        
    }
    render() {
        return(
            <>
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
            
            </>
        )
    }
}