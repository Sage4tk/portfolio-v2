import { Link } from "react-router-dom"

export default function ProjectCard({ data }) {

    const style = {
        backgroundImage: `url(${data.imgUrl})`,
        backgroundSize: "cover" 
    }

    return (
            <div className="project-container">
                <Link to={`/id/${data._id}`}>
                    <div className="project-card" style={style}>
                        <div className="project-card_overlay">
                            <p>{data.title}</p>
                        </div>
                    </div>
                </Link>
            </div>
    )
}