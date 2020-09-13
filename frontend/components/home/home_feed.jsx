import React from "react"
import StoryHomeFeedComponent from "./story_home_feed"
import FeaturedStories from "./featured_stories"
import UnFeaturedStories from "./unfeatured_stories"
import { HeartSpinner } from "react-spinners-kit";
import {embedTwitterList} from "../../utils/embedding_twitter"

class HomeFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = {fetching: true}
        this.fetchDifferentStories = this.fetchDifferentStories.bind(this)
    }

    componentDidMount(){
        this.props.fetchStories().then(() => {
            this.setState({fetching: false})
        })
    }

    fetchDifferentStories(topic){

        let url = `https://newsapi.org/v2/everything?${topic}&pageSize=100&apiKey=6b12490eb1b04cf285ece565249d6126`

        this.props.fetchApiStories(url)
    }

    render(){
        let stories;

        if (this.state.fetching) {
            return null
        }

        stories = this.props.stories.map((story) => {
            return (
                <StoryHomeFeedComponent
                    key={story.id}
                    story={story}
                    users={this.props.users}
                />
            )
        })
        return (
            <div className="home-feed">
                <FeaturedStories stories={stories.slice(0, 5)} />
                <UnFeaturedStories stories={stories.slice(5)} />
            </div>
        )
    }
}

export default HomeFeed;