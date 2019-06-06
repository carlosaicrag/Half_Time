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

        this.props.action(formData)
    }

    render(){

        if (!this.state) return null;

        return(
            <form onSubmit={this.handleSubmit} className="create-comment-form">
                <input className="create-comment-body" type="text" value={this.state.body} onChange={this.update("body")} placeholder="Body" />
                <div className="create">
                    <button className="get-started-comment" type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default CommentCreate