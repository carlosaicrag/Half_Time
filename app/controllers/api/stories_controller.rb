class Api::StoriesController < ApplicationController
    def index 
        @stories = Story.all
    end

    def show    
        @story = Story.find_by(id: params[:id])
        render "api/stories/show"
    end

    def create 
        @story = Story.new(story_params)
        @story.author_id = current_user.id

        if @story.save!
            render "api/stories/show"
        else
            render json: @story.errors.full_messages, status 402
        end
    end

    def update 
        @story = current_user.stories.find_by(id: params[:id])

        if @story
            render "api/stories/show"
        else
            render json: ["that story was not found sorry"], status 401
        end

    end

    def destroy
        @story = current_user.stories.find_by(id: params[:id])
        @story.destroy 
    end

    private
    def story_params 
           params.require(:user).permit(:title,:body) 
    end
end
