import React from "react"

const Youtube = function(props){

    return(
        <div>
            <iframe className="story-image-home-feed" width="560" height="315" src={props.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Youtube

