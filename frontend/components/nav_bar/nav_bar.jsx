import React from 'react'
import { Link } from "react-router-dom"

const NavBar = ({currentUser, logout}) => {
    //ternary that says if there is a current user then display an email
    //and a logout button.
    //if there isn't a current user then make sure to display a signup and login page 
    const display = currentUser ? (
        <div>
            <p>{currentUser.email}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ):(
        <div>
            <Link className="button" to="/signup">Sign Up</Link>
            <Link className="button" to="/signin">Log In</Link>
        </div>
    );

    return(
        <header className="nav-bar">
            <h2 className="title">HalfTime</h2>
            <div className="login-signup-logout">
                {display}
            </div>
        </header>
    )
}

export default NavBar