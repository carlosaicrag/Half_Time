import React from "react"
import StoryHomeFeedComponent from "./story_home_feed"
import FeaturedStories from "./featured_stories"

class HomeFeed extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchStories();
    }

    render(){
        let stories = this.props.stories.map((story)=>{
            return(
                <StoryHomeFeedComponent 
                    key={story.id}
                    story={story}
                />
            )
        })
        
        return(
            <div>
                <FeaturedStories stories={stories.slice(0, 5)}/>
                {/* <UnFeaturedStories stories={stories.slice(5)}/> */}
            </div>
        )
    }
}

export default HomeFeed;