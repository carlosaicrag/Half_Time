import React from "react"

const Story = props => {
    let {story} = props;
    return(
        <div className="story-home-feed">
            <h1>{story.title}</h1>
            <h1>{story.body.slice(0,100)}...</h1>
        </div>
    )
}

export default Story