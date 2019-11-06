import React from "react"
import { Link } from "react-router-dom"
import { Redirect, Route, withRouter } from "react-router-dom"
import StoryNews from "../news/story_news_feed"
import StoryHomeFeedOcho from "./story_home_feed_the_ocho"

const StoryHomeFeed = props => {

    if(props.location.pathname === "/"){
       return <StoryHomeFeedOcho story={props.story} users = {props.users} ></StoryHomeFeedOcho>
        
    }else{
        return(
            <StoryNews youtubeModal = {props.youtubeModal} story={props.story} user={props.users}></StoryNews>
        )
    
    }
}

export default withRouter(StoryHomeFeed)