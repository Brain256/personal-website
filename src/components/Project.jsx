import './Cards.css'

function Project({title, description, skills, github, website, youtube, compact}) {
    return (
        <>
            <div className={`project-card${compact ? ' compact' : ''}`}>
                <div className="project-header">
                    <div className="title">{title}</div>
                    <div className="project-links">
                        {github && <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub">
                            <img src="/github.svg" height="35" alt="GitHub"></img>
                        </a>}
                        {website && <a className="demo" href={website} target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>}
                        {youtube && <a href={youtube} target="_blank" rel="noopener noreferrer" title="YouTube">
                            <img src="/youtube.png" height="40" alt="YouTube"></img>
                        </a>}
                    </div>
                </div>
                <div className="skills-tags">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                    ))}
                </div>
                <ul className="desc-list">{description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}</ul>
            </div>
        </>
    )
}

export default Project; 