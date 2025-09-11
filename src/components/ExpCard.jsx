
import './ExpCard.css'

function ExpCard({company, position, description}) {
    return (
        <>
            <div className="exp-card">
                <div>{company}</div>
                <div>{position}</div>
                <div>{description}</div>
            </div>
        </>
    )
}

export default ExpCard; 