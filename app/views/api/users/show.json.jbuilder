json.user do 
    json.extract! @user, :id, :email
end

if @user.stories.length == 0 
    json.stories ""
else
    json.partial! "api/stories/index", stories:@user.stories
end
