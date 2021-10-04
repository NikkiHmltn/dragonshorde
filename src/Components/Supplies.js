import NavBar from './NavBar'
import Footer from './Footer'
import './css/Supplies.css'
import Dice from './imgs/dice.JPG'
import Playmats from './imgs/playmats.JPG'
import Sleeves from './imgs/sleeves.JPG'
import dragon from './imgs/dragon.png'


function Supplies( ) {
    return(
        <div className="supplies">
            <NavBar/>
            <div className="dragon-cage">
                <img src={dragon} alt="red dragon"/>
            </div>
            <div className="supplies-intro">
                <h1>Supplies</h1>
                <p>The Dragon's Hoard carries a great selection of supplies for any of your card needs. Feel free to stop in to check out our selection or <a href="tel:+15306002365">call us</a> if you have any questions.</p>
            </div>
            <br />
            <div className="page-end">
                    
            </div>
            <div className="supplies-main">
                <div className="supplies-dice">
                    <div className="dice-main">
                        <h2>Dice</h2>
                        <p>Find your next set of dice here! We have a wide variety of styles to choose from along with a variety of dice bags to store them in. Need to make your rolls in a small area with maximum probability? We also carry dice boots. Roll that Nat 20!</p>
                    </div>
                    <div className="dice-img">
                        <img src={Dice} alt="#" />
                    </div>
                </div>
                <div className="card-accesories">
                    <div className="car-acc-img">
                        <img src={Sleeves} alt="#" />
                    </div>
                    <div className="car-acc-main">
                        <h2>Card Accesories</h2>
                        <p>Make sure your cards stay clean and mint with our card sleeves. We sell sleeves varying in colors and durability depending on your needs. Feel free to check out our playmats, too! Perfect for any tournament or game. </p>
                    </div>
                </div>
                <div className="card-storage">
                    <div className="storage-main">
                        <h2>Card Storage</h2>
                        <p>Need a place to put your cards? Great news! We also happen to sell binders, binder pages, and deck boxes. Stop in and check out our selection. </p>
                    </div>
                    <div className="storage-img">
                        <img src={Playmats} alt="#" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Supplies