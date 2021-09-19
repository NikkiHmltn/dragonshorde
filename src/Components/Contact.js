import emailjs from 'emailjs-com'
import Footer from './Footer'
import Navbar from './NavBar'
import './css/Contact.css'

function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, pprocess.env.USER_ID)
        .then((result) => {
            console.log(result.text)
        }), (err) => {
            console.log(err.text)
        }
        e.target.reset()
    } 

    return(
        <>
        <Navbar />
            <form onSubmit={handleSubmit}>
                <div className="container-contact form-group">
                    <div><h2>Contact Us</h2></div>
                    <div className="input-forms">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="from_name" placeholder="Name" className="form-control" id="name" required/>
                    </div>
                    <div className="input-forms">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" placeholder="Email" name="from_email" id="email" required/>
                    </div>
                    <div className="input-forms">
                        <textarea className="form-control" placeholder="Message Here" name="message" id="message" rows="5" required/>
                    </div>
                    <button className="btn btn-danger" type="submit">Send a Message</button>
                </div>
            </form>
        <Footer />
        </>
    )
}

export default Contact