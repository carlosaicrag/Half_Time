import React from "react"

const Categories = (props) => {



    return(
        <div className="categories">
                <div className="categories-container">
                    <div onClick={() => props.fetchDifferentStories("top-headlines?country=us")}className="home-categories">Top News</div>
                    <div onClick={()=>props.fetchDifferentStories("q=youtube.com")}>Sports</div>
                    <div onClick={() => props.fetchDifferentStories("q=basketball")}>Basketball</div>
                    <div onClick={() => props.fetchDifferentStories("q=Tech")}>Tech</div>
                    <div onClick={() => props.fetchDifferentStories("q=Startups")}>Startups</div>
                    <div onClick={() => props.fetchDifferentStories("q=Self")}>Self</div>
                    <div onClick={() => props.fetchDifferentStories("q=Politics")}>Politics</div>
                    <div onClick={() => props.fetchDifferentStories("q=Health")}>Health</div>
                    <div onClick={() => props.fetchDifferentStories("q=Design")}>Design</div>
                    <div onClick={() => props.fetchDifferentStories("q=Human Parts")}>Human Parts</div>
                    <div onClick={() => props.fetchDifferentStories("q=Random")}>Random</div>
                    {/* <form onSubmit={this.handleSubmit} className="create-form">
                        <input className="create-title" type="text" placeholder="what are you looking for"/>
                    </form> */}
                </div>
            </div>
    )
}

export default Categories;