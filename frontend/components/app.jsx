import React from 'react'
import Modal from './modal/modal'
import { Route,Link,Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import HeaderContainer from "./header/header_container"
import HomeFeedContainer from "../components/home/home_feed_container"
import StoryShowContainer from "../components/story/story_container"
import CreateStoryContainer from "../components/story/story_create_container"

const App = () => (
    <div>
        <Modal />
        <header className="header">
            <Link to="/" className="header-link">
                HalfTime
            </Link>
            <HeaderContainer />
        </header>
        <Switch>
            <Route exact path="/" component={HomeFeedContainer}/>
            <Route path="/new" component={CreateStoryContainer}/>
            <ProtectedRoute exact path="/:storyId" component={StoryShowContainer}/>
        </Switch>
    </div>
);

export default App;