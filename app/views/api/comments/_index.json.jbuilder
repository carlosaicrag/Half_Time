json.comments do 
    comments.each do |comment|
        json.partial! "api/comments/show", comment: comment
    end
end