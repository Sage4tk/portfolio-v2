import React, { useState, useRef } from "react";
import emailjs from "emailjs-com"

//impport component
import Footer from './Footer';

export default function Contact() {

    //message has been sent
    const [sent, setSent] = useState(false)

    //form error notifier
    const [formError, setFormError] = useState(false);

    //refs
    const nameRef = useRef();
    const fieldRef = useRef();

    const Form = (props) => {
        if (props) return (
            <div className="sent-box">
                <p>Message has be sent!</p>
            </div>
        )

        return (
            <form onSubmit={sendEmail}>
                    <div className="form-control">
                        <label>E-Mail:</label>
                        <input placeholder="Type E-mail here" type="email" name="email" className={formError ? "error-border":""} />
                    </div>
                    <div className="form-control">
                        <label>Name:</label>
                        <input placeholder="Type name here" type="text" name="name" ref={nameRef} className={formError ? "error-border":""} />
                    </div>
                    <div className="form-control">
                        <label>Message:</label>
                        <textarea placeholder="Your Message here" name="message" ref={fieldRef} className={formError ? "error-border":""} />
                    </div>
                    <div className="form-control">
                        <button type="submit">submit</button>
                    </div>
                </form>
        )
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (!fieldRef.current.value || !nameRef.current.value) {
            setFormError(true);
            setTimeout(() => {
                setFormError(false);
            }, 1000)
        } else {
            emailjs.sendForm('service_xtqhb5g', 'template_mhh41wy', e.target, 'user_4Yl1rxkDlisuTBcOwiNLW')
            .then((result) => {
                e.target.reset();
                setSent(true);
            }, (error) => {
                throw error
            });   
        }
    }

    return (
        <div className="contact-page">
            <h1>CONTACTS</h1>
            <p className="contact-page_desc">If you are interested on hiring me, you can reach me through the means below.</p>
            {Form(sent)}
            <div className="landing-contact">
                <div>
                    <p>E-MAIL</p>
                    <p>ttimbol08<span>@gmail.com</span></p>
                </div>
                <div>
                    <p>PHONE</p>
                    <p><span>(+971)</span> 50 595 7395</p>
                </div>
                <div>
                    <p>GitHub</p>
                    <a href="https://github.com/Sage4tk">https://github.com/Sage4tk</a>
                </div>
            </div>
            <Footer left={'Projects'} bottomed={true} />
        </div>
    )
}

