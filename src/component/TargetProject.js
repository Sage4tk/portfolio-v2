import { useEffect, useState } from "react";
import { useParams } from "react-router";

//context
import { useProject } from "../context/projectContext";

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

            //if nothing is found
            if (find.length === 0) {
                console.log('nothing was found');
            }

            setCheck(find);
        }

    }, [project])

    return (
        <div className="dynamic-project">
            <h1>{params}</h1>
        </div>
    )
}