import React from 'react'
import Modal from './modal/modal'
import { Route } from 'react-router-dom'
// import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import { Link } from "react-router-dom"
import HeaderContainer from "./header/header_container"

const App = () => (
    <div>
        <Modal />
        <header className="header">
            <Link to="/" className="header-link">
                HalfTime-The-Ocho
            </Link>
            <HeaderContainer />
        </header>
        {/* <Route to="/users/:userId" component={UserShowContainer}></Route> */}
    </div>
);

export default App;