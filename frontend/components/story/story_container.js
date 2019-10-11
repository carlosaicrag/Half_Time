import { connect } from "react-redux"
import StoryShow from "./story_show"
import { Redirect, Route, withRouter } from "react-router-dom"
import { fetchStory } from "../../actions/stories_actions";
import {createLike, deleteLike} from "../../actions/likes_actions";
import {createFollow,deleteFollow} from "../../actions/follows_actions"
import {createComment, deleteComment} from "../../actions/comments_actions"

const mapStateToBanana = (state,ownProps) => {
    let story = state.entities.stories[ownProps.match.params.storyId]
    let likes = Object.values(state.entities.likes)
    let follows = Object.values(state.entities.follows)
    let comments = Object.values(state.entities.comments)
    let commentAuthors = Object.assign({},state.entities.users)
    let author ="";
    if(Object.keys(state.entities.users).length===0) {
        author = ""
    }else{
        if(story.authorId === undefined){
            author = state.entities.users[story.author_id]
        }else{
            author = state.entities.users[story.authorId]
        }
        
    }
    return({
        story:story,
        likes:likes,
        follows:follows,
        comments: comments,
        currentUser: state.session.currentUser.id,
        author: author,
        commentAuthors:commentAuthors
    })
}

const mapDispatchToBanana = (dispatch) => {
    return({
        fetchStory: (id) => dispatch(fetchStory(id)),
        createLike: (storyId) => dispatch(createLike(storyId)),
        removeLike: (storyId) => dispatch(deleteLike(storyId)),
        createFollow: (followeeId) => dispatch(createFollow(followeeId)),
        deleteFollow: (followeeId) => dispatch(deleteFollow(followeeId)),
        createComment: (comment) => dispatch(createComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    })
}

export default withRouter(connect(mapStateToBanana,mapDispatchToBanana)(StoryShow))