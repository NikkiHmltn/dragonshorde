import NavBar from './NavBar'
import Footer from './Footer'
import './css/Boardgames.css'
import Catan from './imgs/catan.jpg'


function BoardGames() {
    return(
        <>
        <NavBar />
        
        <div className="boardgame-banner">
            <img src={Catan} alt="..." class="boardgame-img"/>
            <div className="boardgame-title">Boardgames</div>
        </div>
        
        <div className="boardgames">
            <p>The horde doesn't have just cards, it has boardgames! We have a ton of popular and niche boardgames for purchase or for testing. We welcome people to come and try out a game with their friends. Rent the game, play it, and if you enjoy it, purchase it! Below are just a few of the games we tend to have in stock, but we can always order you a boardgame if you have a certain one in mind. Come check them out.</p> 
            <p>Not immediately seeing what you were looking for? <a href="tel:+1">Call us</a> or <a href="/contact">send us a message</a>!</p>

            
        </div>
       
        <div className="dnd-holder">
            <div className="wrapper-card">
                <div className="card-catan" >
                    <div className="card__content-board">
                        <div>
                            <em>Players:</em> 3-4, Ages over 10, <em>1 hr average</em>
                        </div>
                        Picture yourself in the era of discoveries: after a long voyage of great deprivation, your ships have finally reached the coast of an uncharted island. Its name shall be Catan! But you are not the only discoverer. Other fearless seafarers have also landed on the shores of Catan: the race to settle the island has begun!
                    </div>
                </div>
            </div>
            <div className="wrapper-card">
                <div className="card-munchkin" >
                    <div className="card__content-board">
                        <div>
                            <em>Players:</em> 3-6, Ages over 10, <em>1-2 hrs average</em>
                        </div> 
                        Munchkin is the mega-hit card game about dungeon adventure with none of that stupid roleplaying stuff. You and your friends compete to kill monsters and grab magic items. And what magic items! Don the Horny Helmet and the Boots of Butt-Kicking. Start by slaughtering the Potted Plant and the Drooling Slime, and work your way up to the Plutonium Dragon.
                    </div>
                </div>
            </div>
            <div className="wrapper-card">
                <div className="card-betrayl" >
                    <div className="card__content-board">
                        <div>
                           <em>Players:</em> 3-6, Ages over 12, <em>1 hr average</em> 
                        </div>
                        The creak of footsteps on the stairs, the smell of something foul and dead, the feel of something crawling down your back – this and more can be found this award-winning and highly acclaimed game of strategy and horror. Players must work together to survive the nightmare. Except for 1 player who becomes the traitor.
                    </div>
                </div>
            </div>
            <div className="wrapper-card">
                <div className="card-waterdeep" >
                    <div className="card__content-board">
                        <div>
                            <em>Players:</em> 2-5, Ages over 12, <em>1 hr average</em>
                        </div>
                    Waterdeep, the City of Splendors—the most resplendent jewel in the Forgotten Realms, and a den of political intrigue and shady back-alley dealings. In this game, the players are powerful lords vying for control of this great city. Its treasures and resources are ripe for the taking, and that which cannot be gained through trickery and negotiation must be taken by force!
                    </div>
                </div>
            </div>
            <div className="wrapper-card">
                <div className="card-allies" >
                    <div className="card__content-board" style={{fontSize: "14px"}}>
                        <div>
                           <em>Players:</em> 2-5, Ages over 12, <em>2 hrs average</em> 
                        </div>
                        As the Empire of Japan, you will plan, build, and maneuver your mighty fleets of ships and aircraft in your effort to dominate half the world. 
                        As one of the Allied powers, you must come together with your allies in the recognized need for a common defense. To succeed, you will need to take charge of the economic, political, and military reigns of your world power, because you’ll be challenged by the greatest naval and air power in the world.
                    </div>
                </div>
            </div>
            <div className="wrapper-card">
                <div className="card-horizon" >
                    <div className="card__content-board">
                        <div>
                            <em>Players:</em> 1-4, Ages over 14, <em>1-2 hrs average</em>
                        </div>
                        In this semi-cooperative board game for 1-4 players, the Hunters Lodge has assigned you a dangerous quarry. You'll need help from your fellow hunters to succeed in taking it down, and your journey won't be easy. Along the way, you'll encounter other foes equally intent on taking you down...
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default BoardGames