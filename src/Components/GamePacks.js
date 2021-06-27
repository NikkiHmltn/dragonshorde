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
        <h2 className="col-title">What We Carry</h2>
        <div className="collection-container">
            <div className="yugioh fade-in">
                <img src={yugioh} alt="yugioh"/>

            </div>
            <div className="magic fade-in">
                <img src={magic} alt="magic the gathering"/>
               
            </div>
            <div className="pokemon fade-in">
                <img src={poke} alt="pokemon"/>
              
            </div>
        </div>
        <div className="information">
            <p>At The Dragon's Horse, we love cards. We love them so much, we decided to bring them to the Lake Tahoe area for everyone else to enjoy too! Yugioh, Magic the Gathering, and Pokemon are our big sellers. Come check out all of our boosters, tins, singles, and sleeves. We want to make sure you have everything you need to enjoy your card colelction or playing with friends (or with us!), so we have also stocked up on deck supplies to keep your cards safe from life. </p> 
            <br></br>
            <p>Not interesting in buying and want to sell or trade? Sure, we can do that too! It doesn't have to be the big three listed above for us to consider buying your cards off you. Please refer to the store policy and keep in mind that we're here to work with you! Any and all trades and purchase of your cards will be left up to the employees. </p>
            <br></br>
            <p>Have questions or just want to talk? <a href="tel:+1">Call us</a> or <a href="/contact">send us a message</a>!</p>
        </div>
        <div className="store-policy">
                    <h3>Store Policy</h3>
                    <p>All sales and trades are final. Trades between players is generally permitted (cards only, no cash trades), but employees reserve all rights to disallow player to player trade for any reason.</p>
                </div>
        <Footer />
        </>
    )
}

export default GamePacks