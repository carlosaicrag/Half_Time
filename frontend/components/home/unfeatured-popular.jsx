import React from "react"
import UnfeaturedPopularStory from "./unfeatured_popular_story"

const UnfeaturedPopular = (props)=>{
    let { stories } = props

    return(
        <div className="unfeatured-popular">
            <div className="title-container">
                <div className="title">Popular on TheOcho</div>
            </div>

            <div>
                <UnfeaturedPopularStory 
                    author={stories}
                />
            </div>
        </div>
    )
}

export default UnfeaturedPopular