import './Navbar.css'

function Navbar() {
    const handleNavClick = (id) => {
        try {
            window.__hashLock = { target: id, until: Date.now() + 1500 };
            if (window.__hashLockTimer) clearTimeout(window.__hashLockTimer);
            window.__hashLockTimer = setTimeout(() => {
                if (window.__hashLock && window.__hashLock.target === id) {
                    window.__hashLock = null;
                }
            }, 1600);
        } catch (_) {
            // no-op
        }
    };

    return (
        <>
            <div className="nav-container">
                <div className="name"><a href="#about" onClick={() => handleNavClick('about')}><img src="/Logo.png" height="50"/></a></div>
                <div className="links">
                    <div><a href="#about" onClick={() => handleNavClick('about')}>About</a></div>
                    <div><a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a></div>
                    <div><a href="#career" onClick={() => handleNavClick('career')}>Career</a></div>
                </div>
            </div>
        </>
    )
}

export default Navbar