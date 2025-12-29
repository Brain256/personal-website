
import './Cards.css'

function ExpCard({company, position, description, img}) {
    return (
        <>
            <div className="exp-card">
                <div className="exp-header">
                    <div className="company">{company}</div>
                </div>
                <div className="position">{position}</div>
                <ul className="desc-list">{description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}</ul>
            </div>
        </>
    )
}

export default ExpCard; 