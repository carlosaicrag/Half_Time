import React from "react"
import StoryComponent from "../story/story"

class HomeFeed extends React.Component {
    constructor(props){
        super(props);
        // debugger
    }

    componentDidMount(){
        this.props.fetchStories();
    }

    render(){
        let stories = this.props.stories.map((story,idx)=>{
            return(
                <StoryComponent 
                    key={story.id}
                    story={story}
                />
            )
        })
        
        return(
            <div>
                {/* <FeaturedStories stories={stories.slice(0, 5)} */}
                <ul>
                    {stories}
                </ul>
            </div>
        )
    }
}

export default HomeFeed;