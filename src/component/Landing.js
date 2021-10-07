import { NavLink } from "react-router-dom"
import { Helmet } from "react-helmet"

//img
import me from "../img/me.jpg"
import arrow from "../img/arrow.svg"

export default function Landing() {
    return (
        <div className="landing">
            <Helmet>
                <title>Portfolio | Timothy Timbol</title>
            </Helmet>
            <div className="landing-header">
                <h1>Zack<br/>Timbol</h1>
                <h2>FRONT-END DEVELOPER</h2>
            </div>
            <div className="landing-nav">
                <NavLink to="/about">ABOUT ME</NavLink>
                <NavLink to="/projects">PROJECTS</NavLink>
                <NavLink to="/contacts">CONTACT</NavLink>
            </div>
            <div className="landing-contact">
                <div>
                    <p>E-MAIL</p>
                    <p>ttimbol08<span>@gmail.com</span></p>
                </div>
                <div>
                    <p>PHONE</p>
                    <p><span>(+971)</span> 50 595 7395</p>
                </div>
            </div>
            <div className="landing-img">
                <img src={me} alt="Timothy Timbol"></img>
            </div>
            <div className="landing-footer">
                <hr />
                <NavLink to="/about" className="right-nav">About Me<img src={arrow} alt="right arrow"></img></NavLink>
            </div>
        </div>
    )
}