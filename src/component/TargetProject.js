import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

//context
import { useProject } from "../context/projectContext";

//img
import arrow from '../img/arrow.svg';

export default function TargetProject() {

    //check
    const [check, setCheck] = useState(null);

    //context
    const project = useProject();
    //params
    let { params } = useParams();

    //search for in context
    useEffect(() => {
        if(!project) {
            return;
        } else {
            const find = project.filter((find) => {
                return find._id === params;
            });

            console.log(find)
            setCheck(find);
        }

    }, [project])

    //render if nothing is found
    const nullCheck = (props) => {

        if (!props || props.length === 0) {
            return(
                <div className="project-404">
                    <div>
                        <h1>Project does not exist.</h1>
                        <Link to="/projects">To project list</Link>
                    </div>
                </div>
            )
        };
        
        return (
            <div className="project-target">
                <h1>{props[0].title}</h1>
                <div className="project-target_info">
                    <img src={props[0].imgUrl}></img>
                    <div className="project-target_desc">
                        <p>{props[0].websiteDescription}</p>
                        <div className="project-target_control">
                            <p>Site URL:</p>
                            <a href={props[0].websiteLink}>{props[0].websiteLink}</a>
                        </div>
                        <div className="project-target_control">
                            <p>Stacks:</p>
                            <p>{props[0].technology}</p>
                        </div>
                    </div>
                </div>
                    <div className="footer">
                    <hr />
                    <Link to="/projects" className="left-nav"><img src={arrow} alt="left arrow"></img>Back to Projects</Link>
                </div>
            </div>
        )
    }

    return (
        <>
            {nullCheck(check)}
        </>
    )
}