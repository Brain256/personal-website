import './Project.css'

function Project({title, description, skills, img}) {
    return (
        <>
            <div className="project-card">
                <div>{title}</div>
                <div>{description}</div>
                <div>{skills}</div>
                <div>{img}</div>
            </div>
        </>
    )
}

export default Project; 