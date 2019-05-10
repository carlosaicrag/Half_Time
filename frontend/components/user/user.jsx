import React from 'react'
import StoryCurrentUser from "./story_current_user"
import StoryUser from "./story_user"
import StoryUserContainer from "./story_user_container"

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {user:this.props.user,loading:true,currentUser:this.props.currentUser}
    }

    componentDidMount(){
        let userId = this.props.match.params.userid;
        this.props.fetchUser(userId).then(() => this.setState({loading:false}));
    }

    checkIfCurrentUser(){
        debugger
        if (this.props.match.params.userid !== this.props.currentUser.id){
            return false
        }else{
            return true;
        } 
    }

    render(){
        if(this.state.loading){
            return(
                <h1>loading</h1>
            )
        }

        let profileType;
        if(this.checkIfCurrentUser()){
            profileType = "Your Stories"

        }else{

            profileType = "Their Stories"
        }
        

        let stories = this.props.stories.map(story => {
            // let that=this;
            if( !this.checkIfCurrentUser()){
                return (
                    <StoryUser
                        key={story.id}
                        story={story}
                        match={this.props.match}
                    />
                )
            }else{
                return(
                    <StoryCurrentUser 
                        key={story.id}
                        story={story}
                        match={this.props.match}
                        deleteStory= {this.props.deleteStory}
                    />
                )
            }

        })
        return(
            <div className="user-profile-stories-container">
                <div className="user-profile-title-container">
                    <div className="user-profile-title">{profileType}</div>
                </div>

                <StoryUserContainer 
                    stories = {stories}
                />

            </div>
        )
    }
}

export default User;