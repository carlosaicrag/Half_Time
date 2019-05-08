json.user do 
    json.extract! @user, :id, :email
end

json.stories do 
    json.partial! "api/stories/index", stories:@user.stories
end