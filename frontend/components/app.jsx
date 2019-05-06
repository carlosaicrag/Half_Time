import React from 'react'
import Modal from './modal/modal'
import { Route } from 'react-router-dom'
// import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import { Link } from "react-router-dom"
import HeaderContainer from "./header/header_container"
import HomeFeedContainer from "../components/home/home_feed_container"
import StoryShowContainer from "../components/story/story_container"

const App = () => (
    <div>
        <Modal />
        <header className="header">
            <Link to="/" className="header-link">
                HalfTime
            </Link>
            <HeaderContainer />
        </header>
        <Route exact path="/" component={HomeFeedContainer}/>
        <Route path="/:storyId" component={StoryShowContainer}/>
    </div>
);

export default App;