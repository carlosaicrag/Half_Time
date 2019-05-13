json.extract! story, :id, :title, :body, :author_id

if(story.photo.attached?)
    json.photoUrl url_for(story.photo)
else
    json.photoUrl ""    
end

if(story.likes.length != 0)
    json.likes do 
        story.likes.each do |like|
            json.set! like.id do
                json.extract! like, :id, :user_id, :user_id 
            end

        end
    end
    
else

    return ""

end