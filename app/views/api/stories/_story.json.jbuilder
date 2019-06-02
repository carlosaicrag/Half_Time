json.extract! story, :id, :title, :body, :author_id

json.user do 
    json.extract! story.user, :id, :email
end

json.follows do 
    story.user.followers_id.each do |follow|
        json.partial! "api/follows/show", follow:follow
    end
end
if(story.photo.attached?)
    json.photoUrl url_for(story.photo)
else
    json.photoUrl ""    
end

if(story.likes.length != 0)
    json.likes do 
        story.likes.each do |like|
            json.set! like.id do
                json.extract! like, :id, :user_id, :story_id 
            end

        end
    end  
else
    json.likes ""
end

