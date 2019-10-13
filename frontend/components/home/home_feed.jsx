import React from "react"
import StoryHomeFeedComponent from "./story_home_feed"
import FeaturedStories from "./featured_stories"
import UnFeaturedStories from "./unfeatured_stories"
import Categories from "./categories"
import { HeartSpinner } from "react-spinners-kit";

class HomeFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = {loading: true}
        this.fetchDifferentStories = this.fetchDifferentStories.bind(this)
    }

    componentDidMount(){
        let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6b12490eb1b04cf285ece565249d6126';
            this.props.fetchApiStories(url)

        // this.props.fetchStories()
        // .then(setTimeout(() => {
        //     this.setState({ loading: false })
        // }, 1000))


    }

    fetchDifferentStories(topic){
        let url;

        if (topic ==="top-headlines?country=us"){
            url = `https://newsapi.org/v2/${topic}&pageSize=100&apiKey=6b12490eb1b04cf285ece565249d6126`
        }else{
            url = `https://newsapi.org/v2/everything?${topic}&pageSize=100&apiKey=6b12490eb1b04cf285ece565249d6126`
        }
        debugger
        this.props.fetchApiStories(url)
    }

    render(){

        if(this.props.stories.length === 1){
            return null;
        }
        
        let stories = this.props.stories.map((story)=>{

            return(
                <StoryHomeFeedComponent 
                // key={story.id}
                story={story}
                user={story.author}
                />
                )
            })
            
        // if (this.state.loading) {
        //     return (
        //         <div className="user-loading-screen">
        //             <PushSpinner
        //                 size={30}
        //                 color="#686769"
        //                 loading={this.state.loading}
        //             />
        //         </div>
        //     )
        // }
        return(
            <div className="home-feed">
                <Categories
                fetchDifferentStories = {this.fetchDifferentStories}
                />

                <FeaturedStories stories={stories.slice(0, 5)}/>
                <UnFeaturedStories stories={stories.slice(5)}/>
            </div>
        )
    }
}

export default HomeFeed;