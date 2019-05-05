import React from "react"

const FeaturedStories = props => {
    //these are story_home_feed components
    let { stories } = props;

    const leftFeatured = (story) => {
        return(
            <div className="left-featured">
                {story}
            </div>
        )
    }

    const rightFeatured = (story) => {
        return (
            <div className="right-featured">
                {story}
            </div>
        )
    }

    const midFeatured = (stories) => {
        return(
            <div className="mid-featured">
                <div>
                    {stories[1]}
                </div>
                <div>
                    {stories[2]}
                </div>
                <div>
                    {stories[3]}
                </div>
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