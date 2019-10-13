import React from "react"

class Categories extends React.Component {

    constructor(props){
        super(props)

        this.state = {category: ""}
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(e){
        this.setState({
            category:e.target.value
        })
    }

    handleSubmit (e){
        this.props.fetchDifferentStories(`q=${this.state.category}`)
    }

    render(){
        return(
            <div className="categories">
                    <div className="categories-container">
                        {/* <div onClick={() => props.fetchDifferentStories("top-headlines?country=us")}className="home-categories">Top News</div>
                        <div onClick={()=>props.fetchDifferentStories("q=youtube.com")}>Sports</div>
                        <div onClick={() => props.fetchDifferentStories("q=basketball")}>Basketball</div>
                        <div onClick={() => props.fetchDifferentStories("q=Tech")}>Tech</div>
                        <div onClick={() => props.fetchDifferentStories("q=Startups")}>Startups</div>
                        <div onClick={() => props.fetchDifferentStories("q=Self")}>Self</div>
                        <div onClick={() => props.fetchDifferentStories("q=Politics")}>Politics</div>
                        <div onClick={() => props.fetchDifferentStories("q=Health")}>Health</div>
                        <div onClick={() => props.fetchDifferentStories("q=Design")}>Design</div>
                        <div onClick={() => props.fetchDifferentStories("q=Human Parts")}>Human Parts</div>
                        <div onClick={() => props.fetchDifferentStories("q=Random")}>Random</div> */}
                        <form onSubmit={this.handleSubmit} className="searching" >
                            <input onChange={this.update} className="searching-create-title" type="text" placeholder="what are you looking for?"/>
                            {/* <input type="submit"/> */}
                        </form>
                    </div>
                </div>
        )
    }
}

export default Categories;