# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Users
User.create(email:'demo_user@appAcademy.io', password:"password")

#stories 
Story.create(title:"My First Story",body:"This is my first story!", author_id: 1)
Story.create(title:"My Second Story",body:"This is my second story!", author_id: 1)
