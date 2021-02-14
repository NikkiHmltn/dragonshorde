import NavBar from './NavBar'
import Footer from './Footer'
import './css/Boardgames.css'
import catangame from './imgs/catangame.jpg'
import munchkin from './imgs/munchkin.jpg'
import betrayl from './imgs/betrayl.jpg'
import lords from './imgs/lordsofwaterdeep.jpg'
import axisally from './imgs/axisallies.jpg'
import horizon from './imgs/horizon.jpg'


function BoardGames() {
    return(
        <>
        <NavBar />
        <div className="boardgames">
            
            <div className="title-img fade-in"><h1 id="cover-title">BOARD GAMES</h1></div>
            <p>Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. At tempor commodo ullamcorper a lacus vestibulum sed. Dui faucibus in ornare quam viverra orci sagittis eu. Tristique nulla aliquet enim tortor at auctor. Ipsum consequat nisl vel pretium lectus quam id leo. Turpis cursus in hac habitasse platea. Elementum nisi quis eleifend quam adipiscing vitae proin.</p> 
            <p>Have a specific game in mind? <a href="tel:+1">Call us</a> or <a href="/contact">send us a message</a>!</p>
        </div>
        <section>
            <div className="parallax">
                <div className="parallax-inner">
                    <p>Our Games</p>
                </div>
                
            </div>
        </section>
        
        <div className="boardgame-items">
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" height="70%" width="90%" src={catangame} alt="Catan" />
                <div class="card-body">
                    <h5 class="card-title">Catan</h5>
                    <p class="card-text">....</p>
                </div>
            </div>
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={munchkin} alt="Munchkin" />
                <div class="card-body">
                    <h5 class="card-title">Munchkin</h5>
                    <p class="card-text">....</p>
                </div>
            </div>
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={betrayl} alt="Betrayl at House on the Hill" />
                <div class="card-body">
                    <h5 class="card-title">Betrayl at House on the Hill</h5>
                    <p class="card-text">....</p>
                </div>
            </div>
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={lords} alt="Lords of Waterdeep" />
                <div class="card-body">
                    <h5 class="card-title">Lords of Waterdeep</h5>
                    <p class="card-text">....</p>
                </div>
            </div>
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={axisally} alt="Axis/Allies" />
                <div class="card-body">
                    <h5 class="card-title">Axis/Allies</h5>
                    <p class="card-text">....</p>
                </div>
            </div>
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={horizon} alt="Horizon Zero Dawn" />
                <div class="card-body">
                    <h5 class="card-title">Horizon Zero Dawn</h5>
                    <p class="card-text">....</p>
                </div>
            </div>
        </div>
        <div className="paralax"></div>
        <Footer />
        </>
    )
}

export default BoardGames