import React from "react"
import { Link } from "react-router-dom"

const StoryHomeFeed = props => {
    let {story,users} = props;
    let user;
    debugger
    for(let i = 0; i < users.length; i++){
        if(users[i].id === story.author_id){
            debugger
            user = users[i];
        }
    }

    return(
        <div className="story-home-feed">
        
            <Link to={`/stories/${story.id}`} className="story-image-home-feed-container">
                <img className="story-image-home-feed" src={story.photoUrl} alt={story.title}/>
            </Link>


            <Link to={`/stories/${story.id}`} className="story-details-home-feed">
                <div className="story-details-title-home-feed">{story.title}</div>
                <div className="story-details-body-home-feed">{story.body.slice(0, 100)}...</div>
            </Link>

            <Link to={`users/${user.id}`}>
                {user.email}
            </Link>


        </div>
    )
}

export default StoryHomeFeed