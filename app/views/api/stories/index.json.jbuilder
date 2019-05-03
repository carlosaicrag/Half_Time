json.stories do 
    @stories.each do |story|
        json.partial! "api/stories/story", story:story
    end
end
