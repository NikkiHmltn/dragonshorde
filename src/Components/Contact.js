import Footer from './Footer'
import Navbar from './NavBar'
import './css/Contact.css'

function Contact() {
    return(
        <>
        <Navbar />
            <form>
                <div className="container-contact form-group">
                    <div><h2>Contact Us</h2></div>
                    <div className="input-forms">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Name" className="form-control" id="name"/>
                    </div>
                    <div className="input-forms">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" placeholder="Email" name="email" id="email"/>
                    </div>
                    <div className="input-forms">
                        <textarea className="form-control" placeholder="Message Here" name="message" id="message" rows="5"/>
                    </div>
                    <button className="btn btn-danger">Send a Message</button>
                </div>
            </form>
        <Footer />
        </>
    )
}

export default Contact