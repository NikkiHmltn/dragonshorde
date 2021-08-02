import './css/Intro.css'
import video from './imgs/smoke.mp4'

function Intro() {
    return(
        <>
        <div className="body-intro">
            <section id="section">
                <video src={video} autoPlay muted></video>
            <h1 className="intro-name">
                <span>T</span>
                <span>H</span>
                <span>E</span>
                <span> </span>
                <br></br>
                <span className="dragon">D</span>
                <span className="dragon">R</span>
                <span className="dragon">A</span>
                <span className="dragon">G</span>
                <span className="dragon">O</span>
                <span className="dragon">N</span>
                <span className="dragon">'S</span>
                <br></br>
                <span> </span>
                <span>H</span>
                <span>O</span>
                <span>R</span>
                <span>D</span>
                <span>E</span>
                <br></br>
                <p className="intro-enter"><a href="/welcome">Enter</a></p>
            </h1>
            
            </section>
        </div>
        
        </>
    )
}

export default Intro