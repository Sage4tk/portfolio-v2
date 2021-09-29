import React, { useContext, useState } from "react";

const ProjectsContext = React.createContext();
const ProjectsUpdateContext = React.createContext();

export function useProject() {
    return useContext(ProjectsContext);
}

export function useProjectUpdate() {
    return useContext(ProjectsUpdateContext);
}

export function ProjectProvider({ children }) {
    const [project, setProject] = useState(null);
    return (
        <ProjectsContext.Provider value={project}>
            <ProjectsUpdateContext.Provider value={setProject}>
                {children}
            </ProjectsUpdateContext.Provider>
        </ProjectsContext.Provider>
    )
}