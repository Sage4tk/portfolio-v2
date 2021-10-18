import { Helmet } from "react-helmet"

//components
import Footer from "./Footer"

export default function About() {
    return (
        <div className="about">
            <Helmet>
                <title>About Me | Timothy Timbol</title>
            </Helmet>
            <h1>about me</h1>
            <p>I'm a <span>junior front-end developer</span> from Manila, Philippines.<br/>I aim to provide meticulous solutions for your enterprise's needs.</p>
            <div className="about-info">
                <div>
                    <p>Front End Languages:</p>
                    <p>HTML, CSS, SASS, JavaScript, React, Next</p>
                </div>
                <div>
                    <p>Back End Languages:</p>
                    <p>Node, MongoDB, MySql</p>
                </div>
                <div>
                    <p>Date of Birth:</p>
                    <p>October 8, 1998</p>
                </div>
            </div>
            <Footer left={'Home'} right={'Projects'} />
        </div>
    )
}