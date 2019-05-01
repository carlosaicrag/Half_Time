import React from 'react'
import SignUpContainer from '../session/signup_container'
import SignInContainer from "../session/signIn_container"
import NavBarContainer from './nav_bar/nav_bar_container'
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Route path="/signUp" component={SignUpContainer}/>
        <Route path="/signIn" component={SignInContainer}/>
        {/* <ProtectedRoute path="/feed" component={FeedContainer}/> */}
        <AuthRoute path="/signUp" component={SignUpContainer}/>
        <AuthRoute path="/signIn" component={SignInContainer}/>
    </div>
);

export default App;