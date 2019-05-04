import React from "react"

const StoryHomeFeed = props => {
    let { stories } = props;

    return (
        <div className="unfeatured">
            {stories}
        </div>
    )
}

export default StoryHomeFeed