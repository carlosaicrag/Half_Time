json.extract! story, :id, :title, :body, :author_id
if(story.photo.attached?)
    json.photoUrl url_for(story.photo)
else
    json.photoUrl ""    
end
