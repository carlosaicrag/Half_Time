import React from "react"
import { Link } from "react-router-dom"

const StoryUser = (props) => {
    let {story, match,deleteStory} = props;
    return(
        <div className="story-user-profile">


            <img className="story-image-user-profile" src={story.photoUrl} alt={story.title} />


            <Link to={`/${story.id}`} className="story-details-user-profile">
                <div className="story-details-title-user-profile">{story.title}</div>
                <div className="story-details-body-user-profile">{story.body.slice(0, 100)}...</div>
            </Link>

            <Link >
                <div onClick={() => deleteStory(story.id)}>delete</div>
            </Link>

        </div>
    )
}

export default (StoryUser);
