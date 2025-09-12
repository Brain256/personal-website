import './Cards.css'

function Project({title, description, skills, img, link}) {
    return (
        <>
            <div className="project-card">
                <img src={img} alt="None" width="100" height="100"></img>
                <div className="card-text">
                    <div className="title">{title}</div>
                    <div>{description}</div>
                    <div>{skills}</div>
                </div>
                
                
            </div>
        </>
    )
}

export default Project; 