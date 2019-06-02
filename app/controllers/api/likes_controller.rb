class Api::LikesController < ApplicationController

    def index

    end

    def create 
        @like = Like.new()
        @like.user_id = current_user.id
        @like.story_id = params[:storyId]
        if @like.save
            render "api/likes/show"
        else
            render json: @link.errors.full_messages, status: 422
        end

    end

    def destroy 

        @like = current_user.likes.find_by(story_id: params[:id]) 
        @like.destroy
        render "api/likes/show"
    end

    private 
    def likes_params
        params.require(:likes).permit(:story_id)
    end
end
