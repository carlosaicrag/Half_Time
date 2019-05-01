import React from 'react'

const Splash = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className ="login-signup">

            <button onClick={() => openModal("login")}>LogIn</button>
            <button onClick={() => openModal("signup")}>Signup</button>
        </nav>
    )

    const welcomeUser = (currentUser, logout) => {
        <div className="header">
            <h2 className="header-name">{currentUser.email}</h2>
            <h2 className="header-button" onClick={logout}>Log Out</h2>
        </div>
    }

    return(
        currentUser ? welcomeUser(currentUser,logout) : sessionLinks()
    )
}

export default Splash;