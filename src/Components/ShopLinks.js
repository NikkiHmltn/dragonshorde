import magicbox from './imgs/magic-box-shop.png'
import supplies from './imgs/supplies.jpeg'
import boardgame from './imgs/DnD_LOW.png'
import './css/ShopLinks.css'

function ShopLinks() {
    return(
        <div className="shop-items">
            <div className="links-shop">
                <div className="shop-titles">
                    <h2>CARDS</h2>
                    <h2>SUPPLIES</h2>
                    <h2>BOARDGAMES</h2>
                </div>
                
                <img src={magicbox} alt="magicbox" height="200" width="200" id="cards"/>  
        

                <img src={supplies} alt="card supplies" height="200" width="200" id="supplies"/>    
        
                <img src={boardgame}alt="boardgames" height="200" width="200" id="games"/>    
                
            </div>
        </div>
    )
}

export default ShopLinks