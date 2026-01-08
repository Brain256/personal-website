import './Navbar.css'

function Navbar() {

    return (
        <>
            <div className="nav-container">
                <div className="name"><a href="#about"><img src="/Logo.png" height="50"/></a></div>
                <div className="links">
                    <div><a href="#about">About</a></div>
                    <div><a href="#projects">Projects</a></div>
                    <div><a href="#career">Career</a></div>
                </div>
            </div>
        </>
    )
}

export default Navbar