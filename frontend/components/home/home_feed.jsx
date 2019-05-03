import React from "react"
import StoryComponent from "../story/story"

class HomeFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.stories
        // debugger
    }

    componentDidMount(){
        this.props.fetchStories();
    }

    render(){
        let stories = this.state.map(story=>{
            return(
                <StoryComponent 
                    key={story.id}
                    story={story}
                />
            )
        })
        console.log("hello")
        console.log(stories)
        console.log("goodbye")
        // debugger
        return(
            <div>
                <ul>
                    {stories}
                </ul>
            </div>
        )
    }
}

export default HomeFeed;