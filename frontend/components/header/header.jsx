import React from 'react'

const Header = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className ="login-signup">
            {/* <div>Become a member</div> */}
            <a src="#" onClick={() => openModal("login")}>Log In</a>
            <button className="get-started"onClick={() => openModal("signup")}>Get Started</button>
        </nav>
    )

    const welcomeUser = (currentUser, logout) => {
        return(
        <div className="login-signup">
            <p className="header-name">{currentUser.email}</p>
            <button className="header-button" onClick={logout}>Log Out</button>
        </div>
        )
    }
    return(
        currentUser ? welcomeUser(currentUser,logout) : sessionLinks()
    )
}

export default Header;