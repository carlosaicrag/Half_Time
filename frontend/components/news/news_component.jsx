import React from "react"
// import StoryHomeFeedComponent from "./story_home_feed"
import StoryHomeFeedComponent from "../home/story_home_feed"
// import FeaturedStories from "./featured_stories"
import FeaturedStories from "../home/featured_stories"
import UnFeaturedStories from "../home/unfeatured_stories"
import Categories from "../home/categories"
// import { HeartSpinner } from "react-spinners-kit";
import { embedTwitterList } from "../../utils/embedding_twitter"

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true }
        this.fetchDifferentStories = this.fetchDifferentStories.bind(this)
        this.interval;
        this.youtubeModal = this.youtubeModal.bind(this)
    }

    componentDidMount() {

        //countdown 
        this.interval1 = setInterval(function () {
            var deadline = new Date("Dec 6, 2019 18:00:00").getTime();
            var now = new Date().getTime();
            var t = deadline - now;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("demo").innerHTML = days + "d "
                + hours + "h " + minutes + "m " + seconds + "s ";
            if (t < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);

        //api stories
        if (this.props.location.pathname === "/") {
            this.props.fetchStories()
        } else {
            let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6b12490eb1b04cf285ece565249d6126';
            this.props.fetchApiStories(url).then(() => {
                this.interval = setInterval(() => {
                    this.props.fetchApiStories(url)
                    embedTwitterList();
                }, 600000)
                embedTwitterList();
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        clearInterval(this.interval1)
 
    }

    fetchDifferentStories(topic) {

        let url = `https://newsapi.org/v2/everything?${topic}&pageSize=100&apiKey=6b12490eb1b04cf285ece565249d6126`

        this.props.fetchApiStories(url)
    }

    youtubeModal(videoId){
        debugger
        return(
            ()=>{
                debugger
                this.props.openModal("youtube",videoId)
            }
        )
    }

    render() {

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
                        youtubeModal={this.youtubeModal}
                    />
                )
            })


            return (
                <div className="home-feed">
                    {/* <Categories
                        fetchDifferentStories={this.fetchDifferentStories}
                    /> */}
                    <div id="demo"></div>

                    <div className="twitterF"></div>
                    <FeaturedStories stories={stories.slice(0, 5)} />
                    <div className="twitter-unfeatured">
                        <div className="twitter">
                            <a class="twitter-timeline" data-width="500" data-height="1000" href="https://twitter.com/carlosgarcia95_/lists/feed?ref_src=twsrc%5Etfw">A Twitter List by carlosgarcia95_</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        </div>

                        <UnFeaturedStories stories={stories.slice(5)} />
                    </div>
                </div>
            )
        }
    }
}

export default News;