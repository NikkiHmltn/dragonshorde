import NavBar from './NavBar'
import Footer from './Footer'
import dndheader from './imgs/DnD_Swath_Scndry_Center_V1_L_RGB.png'
import './css/Dnd.css'
function Dnd() {
  
   

    return(
        <>
        <NavBar />
        <div id="dnd-header">
           <img src={dndheader} width="100%"/> 
        </div>
        
        <div className="dnd-holder">
            <div className="wrapper">
                <div className="card-dnd1" >
                <div className="card__content">
                    <i>Cogito ergo sum</i> is a Latin philosophical proposition by René Descartes usually translated into English as "I think, therefore I am". The phrase originally appeared in French as <i>je pense, donc je suis</i> in his Discourse on the Method, so as to reach a wider audience than Latin would have allowed. It appeared in Latin in his later Principles of Philosophy.
                </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="card-dnd2" >
                <div className="card__content">
                    <i>Cogito ergo sum</i> is a Latin philosophical proposition by René Descartes usually translated into English as "I think, therefore I am". The phrase originally appeared in French as <i>je pense, donc je suis</i> in his Discourse on the Method, so as to reach a wider audience than Latin would have allowed. It appeared in Latin in his later Principles of Philosophy.
                </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="card-dnd3" >
                <div className="card__content">
                    <i>Cogito ergo sum</i> is a Latin philosophical proposition by René Descartes usually translated into English as "I think, therefore I am". The phrase originally appeared in French as <i>je pense, donc je suis</i> in his Discourse on the Method, so as to reach a wider audience than Latin would have allowed. It appeared in Latin in his later Principles of Philosophy.
                </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="card-dnd4" >
                <div className="card__content">
                    <i>Cogito ergo sum</i> is a Latin philosophical proposition by René Descartes usually translated into English as "I think, therefore I am". The phrase originally appeared in French as <i>je pense, donc je suis</i> in his Discourse on the Method, so as to reach a wider audience than Latin would have allowed. It appeared in Latin in his later Principles of Philosophy.
                </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="card-dnd5" >
                <div className="card__content">
                    <i>Cogito ergo sum</i> is a Latin philosophical proposition by René Descartes usually translated into English as "I think, therefore I am". The phrase originally appeared in French as <i>je pense, donc je suis</i> in his Discourse on the Method, so as to reach a wider audience than Latin would have allowed. It appeared in Latin in his later Principles of Philosophy.
                </div>
                </div>
            </div>
        </div>
        <div className="dnd-info">
            
        </div>
        <Footer />
        </>
    )
}

export default Dnd