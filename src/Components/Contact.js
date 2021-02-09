function Contact() {
    return(
        <>
            <form>
                <div>
                    <div>Contact Us</div>
                    <div>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div>
                        <input type="email" name="email" id="email"/>
                    </div>
                    <div>
                        <textarea name="message" id="message"/>
                    </div>
                    <button>Send a Message</button>
                </div>
            </form>
        </>
    )
}

export default Contact