import React from "react"

const FeaturedStories = props => {
    //these are story_home_feed components
    let { stories } = props;
    const leftFeatured = (story) => {
        return(
            <div className="left-right-featured left-featured">
                {story}
            </div>
        )
    }

    const rightFeatured = (story) => {
        return (
            <div className="left-right-featured right-featured">
                {story}
            </div>
        )
    }

    const midFeatured = (stories) => {
        return(
            <div className="mid-featured">
              {stories[1]}                
              {stories[2]}
              {stories[3]}
            </div>

        )
    }
    
    return (
        <div className="featured">
            {leftFeatured(stories[0])}
            {midFeatured(stories)}
            {rightFeatured(stories[stories.length-1])}
        </div>
    )
}

export default FeaturedStories;