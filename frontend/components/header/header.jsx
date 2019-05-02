import React from 'react'

const Header = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className ="login-signup">

            <button onClick={() => openModal("login")}>LogIn</button>
            <button className="get-started"onClick={() => openModal("signup")}>Get Started</button>
        </nav>
    )

    const welcomeUser = (currentUser, logout) => {
        return(
        <div className="header">
            <h2 className="header-name">{currentUser.email}</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </div>
        )
    }

    return(
        currentUser ? welcomeUser(currentUser,logout) : sessionLinks()
    )
}

export default Header;