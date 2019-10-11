import React from 'react'
import { Link } from "react-router-dom";

const Header = ({ currentUser, logout, openModal,fetchUser }) => {
    const sessionLinks = () => (
        <nav className ="login-signup">
            {/* <div>Become a member</div> */}
            <div className="magnify-icon">
                <i class="fas fa-search"></i>
            </div>

            <div className="become-a-member">
                Become a member
            </div>

            <div className="login">
                <a src="#" onClick={() => openModal("login")}>Sign In</a>
            </div>

            <div className="get-started">
                <a onClick={() => openModal("signup")}>Get Started</a>
            </div>
        </nav>
)

    const welcomeUser = (currentUser, logout) => {

        return(
        <div className="logout-create-story-profile">

            <div className="logout-container">
                <a src="#" className="logout" onClick={logout}>Log Out</a>
            </div>

            <Link to="/new" className="create-story">Create Story</Link>

            <Link to={`/users/${currentUser.id}`} onClick={() => fetchUser(currentUser.id)} className="profile-container">
                <div className="profile">
                    Profile
                </div> 
            </Link>

            <Link to={`/users/${currentUser.id}`} onClick={() => fetchUser(currentUser.id)} >
                <img className="story-show-profile-pic" src={currentUser.photoUrl}/>
            </Link>


        </div>
        )
    }
    return(
        currentUser ? welcomeUser(currentUser,logout) :sessionLinks() 
    )
}

export default Header;