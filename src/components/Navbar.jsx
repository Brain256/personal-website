import './Navbar.css'

function Navbar() {

    return (
        <>
            <div className="nav-container">
                <div className="name"><a href="#header"><img src="/Logo.jpg" height="50"/></a><div className="name-text">Brian Yin</div></div>
                <div className="links">
                    <div><a href="#project-container">Projects</a></div>
                    <div><a href="#exp-container">Experience</a></div>
                    <div><a href="#contact-container">Contact</a></div>
                </div>
            </div>
        </>
    )
}

export default Navbar