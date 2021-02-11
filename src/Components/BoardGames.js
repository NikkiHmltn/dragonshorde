import NavBar from './NavBar'
import Footer from './Footer'
import './css/Boardgames.css'
import boardgames from './imgs/boardgames.jpg'

function BoardGames() {
    return(
        <>
        <NavBar />
        <div className="boardgames fade-in">
            <h2>We Sell Board Games!</h2>
            <img src={boardgames} />
            <p>Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. At tempor commodo ullamcorper a lacus vestibulum sed. Dui faucibus in ornare quam viverra orci sagittis eu. Tristique nulla aliquet enim tortor at auctor. Ipsum consequat nisl vel pretium lectus quam id leo. Turpis cursus in hac habitasse platea. Elementum nisi quis eleifend quam adipiscing vitae proin.</p> 
            <br></br>
            <p>Have a specific game in mind? <a href="tel:+1">Call us</a> or <a href="/contact">send us a message</a>!</p>
        </div>
        <Footer />
        </>
    )
}

export default BoardGames