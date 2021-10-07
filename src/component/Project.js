import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { useProject } from "../context/projectContext";

//components
import Footer from "./Footer"
import Open from "./Open";
import ProjectCard from "./ProjectCard";

export default function Project({ toggleOpen, setToggleOpen }) {

    const projects = useProject();

    //sets animation show only once
    useEffect(() => {
        setTimeout(() => {
            setToggleOpen(false)
        },1600)
    }, [setToggleOpen])

    const projectGrid = (props) => {
        if (!props) return (null)

        return (
            <div className="project-grid">
                {projects.map((e) => (
                    <ProjectCard data={e} key={e._id} />
                ))}
            </div>
        )
    }

    return (
        <div className="project">
            <Helmet>
                <title>Projects | Timothy Timbol</title>
            </Helmet>
            <h1>PROJECTS</h1>
            {projectGrid(projects)}
            <Footer left={"About Us"} right={"Contacts"}/>
            <Open toggleOpen={toggleOpen} />
        </div>
    )
}