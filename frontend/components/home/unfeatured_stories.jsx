import React from "react"
import UnfeaturedPopular from "./unfeatured-popular"

const StoryHomeFeed = props => {
    let { stories } = props;
    return (
        <div className="unfeatured-container">
            <div className="unfeatured-stories">
                {stories}
            </div>

            <UnfeaturedPopular 
                stories ={stories}
            />
        </div>
    )
}

export default StoryHomeFeed