import React from 'react'
import Modal from './modal/modal'
import { Route } from 'react-router-dom'
// import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import { Link } from "react-router-dom"
import HeaderContainer from "./header/header_container"

const App = () => (
    <div>
        <Modal />
        <header>
            <Link to="/feed" className="header-link">
                <h1>HalfTime</h1>
            </Link>
            <HeaderContainer />
        </header>
        {/* <Route to="/users/:userId" component={UserShowContainer}></Route> */}
    </div>
);

export default App;