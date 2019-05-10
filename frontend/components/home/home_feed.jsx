import React from "react"
import StoryHomeFeedComponent from "./story_home_feed"
import FeaturedStories from "./featured_stories"
import UnFeaturedStories from "./unfeatured_stories"

class HomeFeed extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchStories();
    }

    render(){

        // if(this.props.stories.length === 0 ){
        //     return null;
        // }

        let stories = this.props.stories.map((story)=>{
            return(
                <StoryHomeFeedComponent 
                    key={story.id}
                    story={story}
                    users={this.props.users}
                />
            )
        })

        return(
            <div className="home-feed">
                <FeaturedStories stories={stories.slice(0, 5)}/>
                <UnFeaturedStories stories={stories.slice(5)}/>
            </div>
        )
    }
}

export default HomeFeed;