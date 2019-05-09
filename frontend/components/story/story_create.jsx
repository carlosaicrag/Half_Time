import React from "react"

class StoryCreate extends React.Component{
    constructor(props){
        super(props)

        this.state = this.props.story;
        this.update = this.update.bind(this)
        this.updateFile = this.updateFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return (e) => this.setState({
            [field] : e.target.value
        })
    }

    updateFile(e){
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(e){
        e.preventDefault() 
        const formData = new FormData();
        formData.append("story[title]",this.state.title);
        formData.append("story[body]",this.state.body);

        if (this.state.imageFile){
            formData.append("story[photo]",this.state.imageFile);
        }
        this.props.action(formData,this.state.id).then((res)=> {
            this.props.history.push(`/stories/${res.story.id}`)
        })
    }  
    
    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error,i))}
            </ul>
        )
    }

    render(){
        if (!this.state) return null;
        return(
            <form onSubmit={this.handleSubmit} className="create-form">
                <input className="create-title" type="text" value={this.state.title} onChange={this.update("title")} placeholder="Title"/>
                <textarea className="create-body" value={this.state.body} onChange={this.update("body")} placeholder="Tell your story..."></textarea>
                <div className="create-submit-choose-file">
                    <button className="get-started" type="submit">Submit</button>
                    <div className="upload-file">
                        <input type="file" title=" " onChange={this.updateFile}/>
                    </div>
                </div>
            </form>
        )
    }
}

export default StoryCreate;