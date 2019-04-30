import React from 'react'
// import SignupContainer from './session/signup_container'
import NavBarContainer from './nav_bar/nav_bar_container'
import { Route } from 'react-router-dom'
const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
    </div>
);

export default App;