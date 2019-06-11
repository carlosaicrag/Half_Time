import React from "react"
import { Link } from "react-router-dom"

const StoryHomeFeed = props => {
    let {story,users} = props;
    let user;
    
    for(let i = 0; i < users.length; i++){
        if(users[i].id === story.author_id || users[i].id === story.authorId){
            user = users[i];
        }
    }

    if (story.id === null){
        return null
    }
    
    return(
        
        <div className="story-home-feed">
        
            <Link to={`/stories/${story.id}`} className="story-image-home-feed-container">
                <img className="story-image-home-feed" src={story.photoUrl} alt={story.title}/>
            </Link>


            <div className="story-details-home-feed">
                <Link to={`/stories/${story.id}`} className="story-details-title-home-feed">{story.title}</Link>
                <Link to={`/stories/${story.id}`} className="story-details-body-home-feed">{story.body.slice(0, 100)}...</Link>
                <Link to={`users/${user.id}`} className="story-details-user">{user.email}</Link>
            </div>

            


        </div>
    )
}

export default StoryHomeFeed