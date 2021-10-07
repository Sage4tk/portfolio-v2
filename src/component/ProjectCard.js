import { Link } from "react-router-dom"

export default function ProjectCard({ data }) {

    const style = {
        backgroundImage: `url(${data.imgUrl})`,
        backgroundSize: "cover" 
    }

    return (
        <Link to={`/id/${data._id}`}>
            <div className="project-container">
                <div className="project-card" style={style}>
                    {data.title}
                </div>
            </div>
        </Link>
    )
}