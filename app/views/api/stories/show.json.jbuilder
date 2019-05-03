json.story do 
    json.extract! @story, :id, :title, :body, :author_id
end