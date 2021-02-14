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
                <img class="card-img-top" height="40%" width="90%" src={catangame} alt="Catan" />
                <div class="card-body">
                    <h5 class="card-title">Catan</h5>
                    <p class="card-text">
                        <div className="card-suggestion">
                        <em>Players:</em> 3-4, Ages over 10, <em>1 hr average</em>
                        </div>
                   
                    Picture yourself in the era of discoveries: after a long voyage of great deprivation, your ships have finally reached the coast of an uncharted island. Its name shall be Catan! But you are not the only discoverer. Other fearless seafarers have also landed on the shores of Catan: the race to settle the island has begun!</p>
                </div>
            </div>
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={munchkin} alt="Munchkin" height="40%"/>
                <div class="card-body">
                    <h5 class="card-title">Munchkin</h5>
                    <p class="card-text">
                    <div className="card-suggestion">
                        <em>Players:</em> 3-6, Ages over 10, <em>1-2 hrs average</em>
                        </div>
                        Munchkin is the mega-hit card game about dungeon adventure with none of that stupid roleplaying stuff. You and your friends compete to kill monsters and grab magic items. And what magic items! Don the Horny Helmet and the Boots of Butt-Kicking. Start by slaughtering the Potted Plant and the Drooling Slime, and work your way up to the Plutonium Dragon.
                    </p>
                </div>
            </div>
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={betrayl} alt="Betrayl at House on the Hill" />
                <div class="card-body">
                    <h5 class="card-title">Betrayl at House on the Hill</h5>
                    <p class="card-text">
                    <div className="card-suggestion">
                        <em>Players:</em> 3-6, Ages over 12, <em>1 hr average</em>
                        </div>
                        The creak of footsteps on the stairs, the smell of something foul and dead, the feel of something crawling down your back – this and more can be found this award-winning and highly acclaimed game of strategy and horror. Players must work together to survive the nightmare. Except for 1 player who becomes the traitor.
                    </p>
                </div>
            </div>
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={lords} alt="Lords of Waterdeep" />
                <div class="card-body">
                    <h5 class="card-title">Lords of Waterdeep</h5>
                    <p class="card-text">
                    <div className="card-suggestion">
                        <em>Players:</em> 2-5, Ages over 12, <em>1 hr average</em>
                        </div>
                    Waterdeep, the City of Splendors—the most resplendent jewel in the Forgotten Realms, and a den of political intrigue and shady back-alley dealings. In this game, the players are powerful lords vying for control of this great city. Its treasures and resources are ripe for the taking, and that which cannot be gained through trickery and negotiation must be taken by force!
                    </p>
                </div>
            </div>
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={axisally} alt="Axis/Allies" />
                <div class="card-body">
                    <h5 class="card-title">Axis/Allies</h5>
                    <p class="card-text">
                    <div className="card-suggestion">
                        <em>Players:</em> 2-5, Ages over 12, <em>2 hrs average</em>
                        </div>
                        As the Empire of Japan, you will plan, build, and maneuver your mighty fleets of ships and aircraft in your effort to dominate half the world. 
                        As one of the Allied powers, you must come together with your allies in the recognized need for a common defense. To succeed, you will need to take charge of the economic, political, and military reigns of your world power, because you’ll be challenged by the greatest naval and air power in the world.
                    </p>
                </div>
            </div>
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={horizon} alt="Horizon Zero Dawn" />
                <div class="card-body">
                    <h5 class="card-title">Horizon Zero Dawn</h5>
                    <p class="card-text">
                    <div className="card-suggestion">
                        <em>Players:</em> 1-4, Ages over 14, <em>1-2 hrs average</em>
                        </div>
                        In this semi-cooperative board game for 1-4 players, the Hunters Lodge has assigned you a dangerous quarry. You'll need help from your fellow hunters to succeed in taking it down, and your journey won't be easy. Along the way, you'll encounter other foes equally intent on taking you down...
                    </p>
                </div>
            </div>
            <p>Not immediately seeing what you were looking for? <a href="tel:+1">Call us</a> or <a href="/contact">send us a message</a>!</p>
        </div>
        <Footer />
        </>
    )
}

export default BoardGames