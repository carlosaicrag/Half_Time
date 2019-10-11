# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#seeding data with users and and their stories 
User.destroy_all
Story.destroy_all


img_files = ["https://s3-us-west-1.amazonaws.com/halftime-seed-dev/abigail-keenan-7852-unsplash.jpg",
"https://s3-us-west-1.amazonaws.com/halftime-seed-dev/ben-hershey-575578-unsplash.jpg",
"https://s3-us-west-1.amazonaws.com/halftime-seed-dev/boxed-water-is-better-1464078-unsplash.jpg",
"https://s3-us-west-1.amazonaws.com/halftime-seed-dev/chander-r-1555168-unsplash.jpg",
"https://s3-us-west-1.amazonaws.com/halftime-seed-dev/dave-contreras-190480-unsplash.jpg",
"https://s3-us-west-1.amazonaws.com/halftime-seed-dev/dimon-blr-309444-unsplash.jpg",
"https://s3-us-west-1.amazonaws.com/halftime-seed-dev/dominik-martin-100802-unsplash.jpg",
"https://s3-us-west-1.amazonaws.com/halftime-seed-dev/edgar-chaparro-661261-unsplash.jpg",
"https://s3-us-west-1.amazonaws.com/halftime-seed-dev/freddie-collins-424634-unsplash.jpg",
"https://s3-us-west-1.amazonaws.com/halftime-seed-dev/geoff-scott-124251-unsplash.jpg",
"https://s3-us-west-1.amazonaws.com/halftime-seed-dev/greyson-joralemon-546002-unsplash.jpg"]

default_photo = "https://halftime-seed-dev.s3-us-west-1.amazonaws.com/default-profile-picture-gmail-2.png"

demo_user = User.create!(username:Faker::Name.unique.name,email:"demo user",password:"password")
demo_file = open(default_photo)
demo_user.photo.attach(io: demo_file, filename:"default_img0.png")

(1...10).each do |num|
    user = User.create!(username:Faker::Name.unique.name,email:Faker::Internet.unique.email,password:"password")
    file1 = open(default_photo)
    user.photo.attach(io: file1, filename:"default_img#{num}.png")
    story = Story.create!(title:Faker::Lorem.unique.sentence,body:Faker::Lorem.paragraph(1000), author_id:user.id)
    file2 = open(img_files.shift)
    story.photo.attach(io: file2, filename:"img_#{num}.jpg")
end



