import React from "react"

const StoryHomeFeed = props => {
    let {story} = props;
    return(
        <div className="story-home-feed">
            <div className="story-image-home-feed">image</div>

            <div className="story-details-home-feed">
                <div>{story.title}</div>
                <div>{story.body.slice(0, 100)}...</div>
            </div>
        </div>
    )
}

export default StoryHomeFeed