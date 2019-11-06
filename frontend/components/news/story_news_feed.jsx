import React from "react"
import { Link } from "react-router-dom"
import { Redirect, Route, withRouter } from "react-router-dom"

const StoryNews = function(props){

    let { story, user } = props;

    if (!story.url) {
        return null
    }

    let description;
    let urlToImage;

    if (story.url.includes("https://www.youtube.com/watch?")) {
        urlToImage = <div target="_blank" className="story-image-home-feed-container">
                        <iframe className="story-image-home-feed" width="760" height="515" src={story.url.slice(0, 24) + "embed/" + story.url.slice(32)} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div id="youtube-fullscreen" onClick={props.youtubeModal(story.url.slice(0, 24) + "embed/" + story.url.slice(32))}>fullscreen</div>
                     </div>
    } else {
        urlToImage = <a target="_blank" src={story.url} className="story-image-home-feed-container">
                        <img className="story-image-home-feed" src={story.urlToImage} alt={story.title} />
                     </a>
    }

    if (story.description === null) {
        description = <a target="_blank" href={story.url} className="story-details-body-home-feed">...</a>
    } else {
        description = <a target="_blank" href={story.url} className="story-details-body-home-feed">{story.description.slice(0, 100)}...</a>
    }

    return (

        <div className="story-home-feed">

            {urlToImage}


            <div className="story-details-home-feed">
                <a target="_blank" href={story.url} className="story-details-title-home-feed">{story.title.slice(0, 50)}...</a>
                {description}
                <a target="_blank" href={story.url} className="story-details-user">{user}</a>
            </div>

        </div>
    )
}

export default StoryNews