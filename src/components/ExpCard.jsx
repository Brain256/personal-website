
import './Cards.css'

function ExpCard({company, position, description, img}) {
    return (
        <>
             <div className="exp-card">
                <div className="card-text">
                    <div className="title">{position}</div>
                    <div className="company">{company}</div>
                    <ul className="desc-list">{description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}</ul>
                    
                </div>
                
                
            </div>
        </>
    )
}

export default ExpCard; 