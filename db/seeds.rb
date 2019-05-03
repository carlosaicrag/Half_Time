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

(1..10).each do |num|
    User.create(email:Faker::Name.unique.name,password:"password")
    rand(5...15).times do 
        Story.create(title:Faker::Lorem.unique.sentence,body:Faker::Lorem.paragraph(10), author_id:num)
    end
end