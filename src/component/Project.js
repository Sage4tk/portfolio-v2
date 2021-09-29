import React, { useEffect} from "react"
import { Helmet } from "react-helmet"

//components
import Footer from "./Footer"
import Open from "./Open";

export default function Project({ toggleOpen, setToggleOpen }) {
    
    useEffect(() => {
        setTimeout(() => {
            setToggleOpen(false)
        },1600)
    }, [])

    return (
        <div className="project">
            <Helmet>
                <title>Projects | Timothy Timbol</title>
            </Helmet>
            <h1>PROJECTS</h1>
            <Footer left={"About Us"} right={"Contacts"}/>
            <Open toggleOpen={toggleOpen} />
        </div>
    )
}