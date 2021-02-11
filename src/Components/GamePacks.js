import Footer from './Footer'
import NavBar from './NavBar'
import yugioh from './imgs/yugioh.jpeg'
import poke from './imgs/pokemon.png'
import magic from './imgs/magic.jpg'
import './css/GamePacks.css'

function GamePacks() {
    return(
        <>
        <NavBar />
        <div className="collection-container">
            <div className="yugioh">
                <img src={yugioh} />
            </div>
            <div className="magic">
                <img src={magic} />
            </div>
            <div className="pokemon">
                <img src={poke}/>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default GamePacks