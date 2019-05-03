import React from "react"
import StoryComponent from ""

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.stories
    }

    render(){

        let stories = this.state.props.map(story=>{
            return(
                <StoryComponent 
                    key={story.id}

                />
            )
        })

        return(

        )
    }
}