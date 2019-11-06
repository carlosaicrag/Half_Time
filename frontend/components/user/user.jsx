import React from 'react'
import StoryCurrentUser from "./story_current_user"
import StoryUser from "./story_user"
import StoryUserContainer from "./story_user_container"
import { PushSpinner } from "react-spinners-kit";

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {user:this.props.user,loading:true,currentUser:this.props.currentUser}
    }

    componentDidMount(){
        let userId = this.props.match.params.userid;
        this.props.fetchUser(userId)
        // .then(setTimeout(() => {
        //     this.setState({loading:false})
        // }, 1000))
    }

    checkIfCurrentUser(){
        let currentUserId;

        if (typeof(this.props.currentUser.id) === "number"){
            currentUserId = this.props.currentUser.id.toString()
        }else{
            currentUserId = this.props.currentUser.id
        }  

        if (this.props.match.params.userid !== currentUserId){
            return false
        }else{
            return true;
        } 
    }

    render(){
        debugger
        if(this.props.stories[0]){
            if(this.props.stories[0].urlToImage){
                return (
                    <div></div>
                )
            }
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