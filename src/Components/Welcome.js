import React, {Component} from 'react'
import './css/Welcome.css'
import magiccarousel from './imgs/khm_key_1080p_en.jpg'
import pokecarousel from './imgs/Sword_Shield—Vivid_Voltage_Logo.png'
export default class Welcome extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        
    }
    render() {
        return(
            <>
            <h1>Welcome to Dragons Horde!</h1>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
            </>
        )
    }
}