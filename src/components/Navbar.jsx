import './Navbar.css'

function Navbar() {

    return (
        <>
            <div className="nav-container">
                <div className="name">Brian Yin</div>
                <div className="links">
                    <div><a href="#header">Home</a></div>
                    <div><a href="#project-container">Projects</a></div>
                    <div><a href="#exp-container">Experience</a></div>
                    <div><a href="#contact-container">Contact</a></div>
                </div>
            </div>
        </>
    )
}

export default Navbar