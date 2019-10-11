class Api::UsersController < ApplicationController

    def show
        # sleep(2)
        @user = User.find_by(id: params[:id])
        render "api/users/show"
    end

    def create 

        @user = User.new(user_params)
        if @user.save
            login(@user)
            # this is a route to the jbuilder which will render the json that will be sent to the frontend
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private 
    def user_params
        params.require(:user).permit(:email,:password,:username)
    end
end
