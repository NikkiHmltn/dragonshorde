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
            <p>Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. At tempor commodo ullamcorper a lacus vestibulum sed. Dui faucibus in ornare quam viverra orci sagittis eu. Tristique nulla aliquet enim tortor at auctor. Ipsum consequat nisl vel pretium lectus quam id leo. Turpis cursus in hac habitasse platea. Elementum nisi quis eleifend quam adipiscing vitae proin.</p> 
            <br></br>
            <p>Condimentum vitae sapien pellentesque habitant morbi. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Sit amet nisl purus in mollis nunc. Convallis tellus id interdum velit laoreet id donec. Tincidunt vitae semper quis lectus nulla at volutpat. Velit euismod in pellentesque massa placerat duis ultricies lacus. Id venenatis a condimentum vitae sapien. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Amet risus nullam eget felis eget nunc lobortis mattis.</p>
            <br></br>
            <p>Have questions or just want to talk? <a href="tel:+1">Call us</a> or <a href="/contact">send us a message</a>!</p>
        </div>

        <Footer />
        </>
    )
}

export default GamePacks