import React from "react"
import StoryHomeFeedComponent from "./story_home_feed"
import FeaturedStories from "./featured_stories"
import UnFeaturedStories from "./unfeatured_stories"
import Categories from "./categories"
import { PushSpinner } from "react-spinners-kit";

class HomeFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = {loading: true}
    }

    componentDidMount(){
        this.props.fetchStories()
        // .then(setTimeout(() => {
        //     this.setState({ loading: false })
        // }, 1000))
    }

    render(){

        if(this.props.stories.length === 1){
            return null;
        }
        
        let stories = this.props.stories.map((story)=>{
            return(
                <StoryHomeFeedComponent 
                key={story.id}
                story={story}
                users={this.props.users}
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
                {/* <Categories></Categories> */}
                <FeaturedStories stories={stories.slice(0, 5)}/>
                <UnFeaturedStories stories={stories.slice(5)}/>
            </div>
        )
    }
}

export default HomeFeed;