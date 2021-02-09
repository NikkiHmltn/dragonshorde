import magicbox from './imgs/magic-box-shop.png'
import supplies from './imgs/supplies.jpeg'
import boardgame from './imgs/DnD_LOW.png'
import './css/ShopLinks.css'

function ShopLinks() {
    return(
        <div className="shop-items">
            <div className="links-shop">
                <img src={magicbox} height="200" width="200"/>
                <img src={supplies} height="200" width="200"/>
                <img src={boardgame} height="200" width="200"/>
            </div>
        </div>
    )
}

export default ShopLinks