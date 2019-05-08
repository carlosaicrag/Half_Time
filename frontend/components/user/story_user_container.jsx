import React from "react"

const StoryUserContainer = props => {
    let {stories} = props
    return(
        <div className="stories-user-profile-container">
            {stories}
        </div>
    )
}

export default StoryUserContainer;