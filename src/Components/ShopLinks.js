import magicbox from './imgs/magic-box-shop.png'
import supplies from './imgs/supplies.jpeg'
import boardgame from './imgs/DnD_LOW.png'
import {Link} from 'react-router-dom'
import './css/ShopLinks.css'

function ShopLinks() {
    return(
        <div className="shop-items">
            <div className="links-shop">
                <div className="shop-titles">
                <Link to="/collections"><h2>CARDS</h2></Link>
                <Link to="/collections"><h2>SUPPLIES</h2></Link>
                <Link to="/boardgames"><h2>BOARDGAMES</h2></Link>
                </div>
                <div className="links-images">
                <Link to="/collections"><img src={magicbox} alt="magicbox" height="200" width="200" id="cards"/> </Link>
                <Link to="/collections"><img src={supplies} alt="card supplies" height="200" width="200" id="supplies"/></Link>
                <Link to="/boardgames"><img src={boardgame}alt="boardgames" height="200" width="200" id="games"/></Link>
        
                </div>
            </div>
        </div>
    )
}

export default ShopLinks