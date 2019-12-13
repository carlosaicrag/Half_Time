import React from "react"
import { Link } from "react-router-dom"
import { Redirect, Route, withRouter } from "react-router-dom"

const StoryHomeFeedOcho = function(props){
        let { story, users } = props;
        let user;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === story.author_id || users[i].id === story.authorId) {
                user = users[i];
            }
        }

        if (story.id === null) {
            return null
        }

        if (story.id === undefined) {
            return null
        }
        let date = new Date(`${story.created_at}`)
        let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
        // let readingTime = ["0","4","7","10","20","30"]

        return (

            <div className="story-home-feed">

                <Link to={`/stories/${story.id}`} className="story-image-home-feed-container">
                    <img className="story-image-home-feed" src={story.photoUrl} alt={story.title} />
                </Link>


                <div className="story-details-home-feed">
                    <Link to={`/stories/${story.id}`} className="story-details-title-home-feed">{story.title.slice(0, 50)}...</Link>
                    <Link to={`/stories/${story.id}`} className="story-details-body-home-feed">{story.body.slice(0, 100)}...</Link>
                    <div className="story-details-home-feed-name-date">
                        <Link to={`users/${user.id}`} className="story-details-user">{user.username}</Link>
                        <div className="story-date">{`${months[date.getMonth()]} ${date.getFullYear()}`}</div>
                    </div>
                </div>




            </div>
        )
}

export default StoryHomeFeedOcho