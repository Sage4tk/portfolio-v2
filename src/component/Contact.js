//impport component
import Footer from './Footer';

export default function Contact() {
    return (
        <div className="contact-page">
            <h1>CONTACTS</h1>
            <p>If you are interested on hiring me, you can reach me through the means below.</p>
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