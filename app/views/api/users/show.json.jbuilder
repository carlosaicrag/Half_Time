json.user do 
    json.extract! @user, :id, :email
end
if @user.stories.length == 0 
    json.stories ""
else
    json.partial! "api/stories/index", stories:@user.stories
end

if @user.followers.length == 0
    json.followers ""
else
    json.partial! "api/follows/index", follows:@user.followers
end

if @user.followees.length == 0
    json.followers ""
else
    json.partial! "api/follows/index", follows:@user.followees
end