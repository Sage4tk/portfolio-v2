import { NavLink } from "react-router-dom"

//img
import arrow from "../img/arrow.svg"

export default function Footer({ left, right, bottomed }) {
    //dynamic nav link function
    const linkConverter = (string) => {
        if (string === "Home") return "/"
        if (string === "About Us") return "/about"
        if (string === "Projects") return "/projects"
        if (string === "Contacts") return "/contact"
    }

    return (
        <div className={bottomed ? "footer bottom" : "footer"}>
                <hr />
                <NavLink to={linkConverter(left)} className="left-nav"><img src={arrow} alt="left-arrow"></img>{left}</NavLink>
                <NavLink to={linkConverter(right)} className="right-nav">{right}<img src={arrow} alt="right-arrow"></img></NavLink>
        </div>
    )
}