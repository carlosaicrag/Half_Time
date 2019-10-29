import React from "react"
import StoryHomeFeedComponent from "./story_home_feed"
import FeaturedStories from "./featured_stories"
import UnFeaturedStories from "./unfeatured_stories"
import Categories from "./categories"
import { HeartSpinner } from "react-spinners-kit";
import {embedTwitterList} from "../../utils/embedding_twitter"

class HomeFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = {loading: true}
        this.fetchDifferentStories = this.fetchDifferentStories.bind(this)
    }

    componentDidMount(){
        if(this.props.location.pathname === "/"){
            this.props.fetchStories()
        }else{
            debugger
            let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6b12490eb1b04cf285ece565249d6126';
            this.props.fetchApiStories(url).then(()=>{
                setInterval(()=>{
                    debugger
                    embedTwitterList(); 
                    this.props.fetchApiStories(url)
                },3000)
                embedTwitterList();
            })
        }
        

        // .then(setTimeout(() => {
        //     this.setState({ loading: false })
        // }, 1000))


    }

    fetchDifferentStories(topic){

        let url = `https://newsapi.org/v2/everything?${topic}&pageSize=100&apiKey=6b12490eb1b04cf285ece565249d6126`

        this.props.fetchApiStories(url)
    }

    render(){

        let stories;

        if (this.props.location.pathname === "/") {
            if (this.props.stories.length === 1) {
                return null;
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
                    {/* <Categories></Categories> */}
                    <FeaturedStories stories={stories.slice(0, 5)} />
                    <UnFeaturedStories stories={stories.slice(5)} />
                </div>
            )
            
        } else {

            // if (this.props.stories.length === 1) {
            //     return null;
            // }

            stories = this.props.stories.map((story) => {

                return (
                    <StoryHomeFeedComponent
                        // key={story.id}
                        story={story}
                        user={story.author}
                    />
                )
            })  
            return(
                <div className="home-feed">
                    <Categories
                    fetchDifferentStories = {this.fetchDifferentStories}
                    />  
                    <div className="twitterF"></div>
                    <FeaturedStories stories={stories.slice(0, 5)}/>
                    <div className="twitter-unfeatured">
                        <div className="twitter">
                            <a class="twitter-timeline" data-width="500" data-height="1000" href="https://twitter.com/carlosgarcia95_/lists/feed?ref_src=twsrc%5Etfw">A Twitter List by carlosgarcia95_</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>                    
                        </div>
                        
                        <UnFeaturedStories stories={stories.slice(5)}/>
                    </div>
                </div>
            )
        }     
    }
}

export default HomeFeed;