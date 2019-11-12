import React from "react"

class CommentCreate extends React.Component{
    constructor(props){
        super(props)

        this.state = { props: this.props,user_id: this.props.currentUserId, body: "", story_id: this.props.storyId };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = new FormData();
        formData.append("comment[body]", this.state.body);
        formData.append("comment[user_id]",this.state.user_id);
        formData.append("comment[story_id]",this.state.story_id);
        this.props.action(formData).then(() =>{
            window.scrollTo(0, document.body.scrollHeight);
        })
    }

    render(){

        if (!this.state) return null;

        return(
            <form onSubmit={this.handleSubmit} className="create-comment-form">
                <textarea style={{width:300}} className="create-comment-body" value={this.state.body} onChange={this.update("body")} placeholder="Write a Response..." />
                <div className="create-comment-submit-container">
                    <div className="get-started-comment" onClick={this.handleSubmit}>Submit</div>
                </div>
            </form>
        )
    }
}

export default CommentCreate