import React from "react"
import { Link } from "react-router-dom"

const StoryHomeFeed = props => {
    let {story,user} = props;
    // let user;
    
    // for(let i = 0; i < users.length; i++){
    //     if(users[i].id === story.author_id || users[i].id === story.authorId){
    //         user = users[i];
    //     }
    // }

    // if (story.id === null){
    //     return null
    // }
    let description;
    let urlToImage;
    if (story.url.includes("https://www.youtube.com/watch?")){
        urlToImage = <iframe className="story-image-home-feed" width="560" height="315" src={story.url.slice(0, 24) + "embed/" + story.url.slice(32)} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }else{
        urlToImage = <img className="story-image-home-feed" src={story.urlToImage} alt={story.title} />
    }

    if(story.description === null){
        description = <a target="_blank" href={story.url} className="story-details-body-home-feed">...</a>
    }else{
        description = <a target="_blank" href={story.url} className="story-details-body-home-feed">{story.description.slice(0, 100)}...</a>
    }
    return(
        
        <div className="story-home-feed">
        
            <a target="_blank" href={story.url} className="story-image-home-feed-container">
                {urlToImage}
            </a>

            
            <div className="story-details-home-feed">
                <a target="_blank" href={story.url} className="story-details-title-home-feed">{story.title.slice(0,50)}...</a>
                {description}
                <a target="_blank" href={story.url} className="story-details-user">{user}</a>
            </div>

        </div>
    )
}

export default StoryHomeFeed