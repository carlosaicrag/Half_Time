import React from "react"

const StoryHomeFeed = props => {
    let {story} = props;
    return(
        <div className="story-home-feed">
            <h1>image</h1>
            <div>
                <h1>{story.title}</h1>
                <h1>{story.body.slice(0,100)}...</h1>
            </div>
        </div>
    )
}

export default StoryHomeFeed