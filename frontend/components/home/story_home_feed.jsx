import React from "react"
import { Link } from "react-router-dom"

const StoryHomeFeed = props => {
    let {story} = props;

    return(
        <div className="story-home-feed">
        
            <div className="story-image-home-feed-container">
                <img className="story-image-home-feed" src={story.photoUrl} alt={story.title}/>
            </div>

            <Link to={`/${story.id}`} className="story-details-home-feed">
                <div className="story-details-title-home-feed">{story.title}</div>
                <div className="story-details-body-home-feed">{story.body.slice(0, 100)}...</div>
            </Link>
        </div>
    )
}

export default StoryHomeFeed