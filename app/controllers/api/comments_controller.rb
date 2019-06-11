class Api::CommentsController < ApplicationController
    def show 

    end

    def create 

        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id

        if @comment.save!
            @story = @comment.story
            render "api/stories/show"
        else
            render json: @story.errors.full_messages, status: 402
        end

    end
    def update
        @comment = current_user.find(params[:id])
        
        if @comment.update(@comment)
            @story = @comment.story
            render "api/stories/show"
        else
            render json: ["that comment could not be found"], status: 401
        end
    end

    def destroy 

        @comment = current_user.comments.find(params[:id])
        @comment.destroy
        @story = @comment.story 
        render "api/comments/show"
    end

    private
    def comment_params 
        params.require(:comment).permit(:body,:story_id,:user_id) 
    end
end
