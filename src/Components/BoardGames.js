import NavBar from './NavBar'
import Footer from './Footer'
import './css/Boardgames.css'
import boardgames from './imgs/boardgames.jpg'

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
        <p>Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. At tempor commodo ullamcorper a lacus vestibulum sed. Dui faucibus in ornare quam viverra orci sagittis eu. Tristique nulla aliquet enim tortor at auctor. Ipsum consequat nisl vel pretium lectus quam id leo. Turpis cursus in hac habitasse platea. Elementum nisi quis eleifend quam adipiscing vitae proin.</p> 
        <br>
        </br>
        <p>Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. At tempor commodo ullamcorper a lacus vestibulum sed. Dui faucibus in ornare quam viverra orci sagittis eu. Tristique nulla aliquet enim tortor at auctor. Ipsum consequat nisl vel pretium lectus quam id leo. Turpis cursus in hac habitasse platea. Elementum nisi quis eleifend quam adipiscing vitae proin.</p> 
        </div>
        <div className="paralax"></div>
        <Footer />
        </>
    )
}

export default BoardGames