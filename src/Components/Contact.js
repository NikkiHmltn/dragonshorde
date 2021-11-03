import React,{ useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import Reaptcha from 'reaptcha';
import Footer from './Footer'
import Navbar from './NavBar'
import './css/Contact.css'

function Contact() {
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const form = useRef()
    emailjs.init(process.env.REACT_APP_USER_ID); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
   console.log(process.env)
   const sitekey = process.env.REACT_APP_RECAPTCHA
   console.log(sitekey)
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    } 

    return(
        <>
        <Navbar />
        <div className="contact-div">
            <form ref={form} onSubmit={handleSubmit}>
                <div className="container-contact form-group">
                    <div><h2>Contact Us</h2></div>
                    <div className="input-forms">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="from_name" placeholder="Name" className="form-control" id="name" required/>
                    </div>
                    <div className="input-forms">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" placeholder="Email" name="reply_to" id="email" required/>
                    </div>
                    <div className="input-forms">
                        <textarea className="form-control" placeholder="Message Here" name="message" id="message" rows="5" required/>
                    </div>
                    <Reaptcha 
                        sitekey={sitekey} 
                        onChange={()=>setButtonDisabled(false)}
                    />
                    {/* <Recaptcha 
                        // ref={recaptchaRef}
                        sitekey={process.env.REACT_APP_RECAPTCHA}
                        id="recaptcha-google"
                        onChange={()=>setButtonDisabled(false)}
                    /> */}
                    <button className="btn btn-danger" disabled={buttonDisabled} type="submit">Send a Message</button>
                </div>
            </form>
            </div>
            <div className="google-div">

            </div>
        <Footer />
        </>
    )
}

export default Contact