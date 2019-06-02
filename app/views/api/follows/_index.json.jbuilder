json.follows do 
    follows.each do |follow|
        json.user do 
            json.extract! follow, :id, :email
        end
    end
end