import React from 'react'
import StoryUser from "./story_user"
import StoryUserContainer from "./story_user_container"

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {currentUser:this.props.currentUser,loading:true}
    }

    componentDidMount(){
        this.props.fetchUser(this.state.currentUser.id).then(() => this.setState({loading:false}));
    }

    render(){
        if(this.state.loading){
            return(
                <h1>loading</h1>
            )
        }
        let stories = this.props.stories.map(story =>{
            return(
                <StoryUser 
                    key={story.id}
                    story={story}
                    match={this.props.match}
                    deleteStory= {this.props.deleteStory}
                />
            )
        })

        return(
            <div className="user-profile-stories-container">
                <div className="user-profile-title-container">
                    <div className="user-profile-title">Your Stories</div>
                </div>

                <StoryUserContainer 
                    stories = {stories}
                />

            </div>
        )
    }
}

export default User;