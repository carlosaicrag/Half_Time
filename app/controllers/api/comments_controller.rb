class Api::CommentsController < ApplicationController
    def show 

    end

    def create 
        @comment = Comment.new()
        @comment.user_id = current_user.id
        @comment.story_id = params[:story_id]

        if @comment.save!
            render "api/stories/show"
        else
            render json: @story.errors.full_messages, status: 402
        end

    end

    def update
        @comment = current_user.find(params[:id])
        
        if @comment.update(@comment)
            render "api/stories/show"
        else
            render json: ["that comment could not be found"], status: 401
        end
    end

    def destroy 
        @comment = current_user.find(params[:id])
        @comment.destroy
        render "api/stories/show"
    end


end
