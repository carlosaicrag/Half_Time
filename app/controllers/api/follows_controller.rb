class Api::FollowsController < ApplicationController
    def show 
        @follow = Follow.find_by(id: params[:id])
        render "api/stories/show"
    end

    def create 
        @follow = Follow.new()
        @follow.follower_id = current_user.id
        @follow.followee_id = params[:followeeId]
        if @follow.save
            render "api/follows/show"
        else
            render json: @follow.errors.full_messages, status: 402
        end
    end

    def destroy 
        @follow = Follow.find_by(followee_id: params[:followeeId])
        @follow.destroy
        render "api/follows/show"
    end

    private 
    def follows_params 
        params.require(:follow).permit(:followee_id)
    end
end
