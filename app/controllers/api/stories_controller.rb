class Api::StoriesController < ApplicationController
    def index 
        @stories = Story.all
    end

    def show    
        @story = Story.find_by(id: params[:id])
    end

    def create 
        @story = Story.new(story_params)
        @story.author_id = current_user.id

        if @story.save!
            render ""
        else
            render json: @story.errors.full_messages, status 402
        end
    end

    def update 
        @story = Story.find_by
    end

    def destroy

    end

    private
    def story_params 
           params.require(:user).permit(:title,:body) 
    end
end
