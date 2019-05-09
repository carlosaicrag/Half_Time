import React from 'react'
import { Link } from "react-router-dom";

const Header = ({ currentUser, logout, openModal,fetchUser }) => {
    const sessionLinks = () => (
        <nav className ="login-signup">
            {/* <div>Become a member</div> */}
            <div className="login">
                <a src="#" onClick={() => openModal("login")}>Log In</a>
            </div>
            <div className="get-started">
                <a onClick={() => openModal("signup")}>Get Started</a>
            </div>
        </nav>
)

    const welcomeUser = (currentUser, logout) => {
        return(
        <div className="login-signup">

            <div className="login">
                <a src="#" onClick={logout}>Log Out</a>
            </div>

            <div className="get-started">
                <Link to="/new" className="create-story">Create Story</Link>
            </div>

            <div className="get-started">
                <Link to={`/users/${currentUser.id}`} onClick={() => fetchUser(currentUser.id)} className="create-story">Profile</Link>
            </div>

        </div>
        )
    }
    return(
        currentUser ? welcomeUser(currentUser,logout) :sessionLinks() 
    )
}

export default Header;