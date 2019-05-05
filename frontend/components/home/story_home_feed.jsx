import React from "react"

const StoryHomeFeed = props => {
    let {story} = props;
    return(
        <div className="story-home-feed">
            <div className="story-image-home-feed">image</div>

            <div className="story-details-home-feed">
                <div className="story-details-title-home-feed">{story.title}</div>
                <div className="story-details-body-home-feed">{story.body.slice(0, 100)}...</div>
            </div>
        </div>
    )
}

export default StoryHomeFeed