json.user do 
    json.partial! "api/users/home_page", user:@user
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

if(@user.photo.attached?)
    json.photoUrl url_for(@user.photo)
else
    json.photoUrl "https://www.gravatar.com/avatar/#{Digest::MD5.hexdigest current_user.email}"    
end