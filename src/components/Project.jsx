import './Cards.css'

function Project({title, description, skills, img, github, website, youtube}) {
    return (
        <>
            <div className="project-card">
                <img src={img} alt="None" width="150" height="150"></img>
                <div className="card-text">
                    <div className="title">{title}</div>
                    <div className="skills">{skills}</div>
                    <ul className="desc-list">{description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}</ul>
                    <div className="project-links">
                        
                        {github && <a href={github}>
                            <img src="src/assets/github.svg" height="30"></img>
                        </a>}

                        {website && <a className="demo" href={website}>
                            Demo
                        </a>}
                        
                        {youtube && <a href={youtube}>
                            <img src="src/assets/youtube.png" height="30"></img>
                        </a>}
                        
                    </div>
                    
                </div>
                
                
            </div>
        </>
    )
}

export default Project; 