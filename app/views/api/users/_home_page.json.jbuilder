
json.photoUrl "https://www.gravatar.com/avatar/#{Digest::MD5.hexdigest user.email}"    

json.extract! user, :id, :email,:username, :created_at
