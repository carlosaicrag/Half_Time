import React from 'react'
import Modal from './modal/modal'
import { Route } from 'react-router-dom'
// import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import { Link } from "react-router-dom"
import SplashContainer from "./splash/splash_container"

const App = () => (
    <div>
        <Modal />
        <header>
            <Link to="/" className="header-link"/>
            <SplashContainer />
        </header>
    </div>
);

export default App;