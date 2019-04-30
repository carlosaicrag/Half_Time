import React from 'react'
import SignUpContainer from '../session/signup_container'
import SignInContainer from "../session/signIn_container"
import NavBarContainer from './nav_bar/nav_bar_container'
import { Route } from 'react-router-dom'
const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Route path="/signup" component={SignUpContainer}/>
        <Route path="/signin" component={SignInContainer}/>
    </div>
);

export default App;