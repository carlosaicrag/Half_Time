# json.stories do 
#     @stories.each do |story|
#         json.set! story.id do 
#             json.partial! "api/stories/story", story:story
#         end
#     end
# end

json.partial! "api/stories/index", stories:@stories