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
        // .then((res) => {
        //     let that = this
        //     debugger
        //     this.props.props.history.push(`/stories/${res.comment.story_id}`)
        // })

        // this.props.action(formData, this.state.id).then((res) => {
        //     this.props.history.push(`/stories/${res.story.id}`)
        // })
    }

    render(){
        if (!this.state) return null;

        return(
            <form onSubmit={this.handleSubmit} className="create-form">
                <input className="create-body" type="text" value={this.state.body} onChange={this.update("body")} placeholder="Body" />
                <div className="create-submit-choose-file">
                    <button className="get-started" type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default CommentCreate