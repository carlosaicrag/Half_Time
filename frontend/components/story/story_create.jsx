import React from "react"

class StoryCreate extends React.Component{
    constructor(props){
        super(props)

        this.state = this.props.story;
        this.update = this.update.bind(this)
    }

    update(field){
        return (e) => this.setState({
            [field] : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault 
        debugger;
        this.props.createStory(this.state)
    }

    render(){
        if (!this.state) return null;

        return(
            <form onSubmit={this.handleSubmit} className="create-form">
                <input className="create-title" type="text" value={this.state.title} onChange={this.update("title")} placeholder="Title"/>
                <textarea className="create-body" value={this.state.body} onChange={this.update("body")} placeholder="Tell your story..."></textarea>
                <button className="get-started" type="submit">Submit</button>
            </form>
        )
    }
}

export default StoryCreate;