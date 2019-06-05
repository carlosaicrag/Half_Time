import React from "react"
import { Link } from "react-router-dom"

const StoryCurrentUser = (props) => {
    let {story, match,deleteStory} = props;
    
    if(story===undefined){
        return 
    }

    return(
        <div className="story-user-profile">

        <Link to={`/stories/${story.id}`} className="story-image-user-profile-container">
            <img className="story-image-user-profile" src={story.photoUrl} alt={story.title} />
        </Link>

            <Link to={`/${story.id}`} className="story-details-user-profile">
                <div className="story-details-title-user-profile">{story.title}</div>
                <div className="story-details-body-user-profile">{story.body.slice(0, 100)}...</div>
            </Link>

            <Link>
                <div onClick={() => deleteStory(story.id)}>delete</div>
            </Link>

            <Link to={`/stories/${story.id}/edit`}>
                <div>Update</div>
            </Link>



        </div>
    )
}

export default (StoryCurrentUser);
