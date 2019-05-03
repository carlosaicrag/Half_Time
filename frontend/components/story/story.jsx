import React from "react"

const Story = props => {
    let {story} = props;
    return(
        <div>
            <h1>{story.title}</h1>
            <h1>{story.body}</h1>
        </div>
    )
}

export default Story