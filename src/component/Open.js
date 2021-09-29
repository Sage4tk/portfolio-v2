export default function Open({ toggleOpen }) {

    if (!toggleOpen) return (null)

    return (
        <div className="project-open">
            <div className="project-left"></div>
            <div className="project-right"></div>
            <h1>Projects</h1>
        </div>
    )
}