# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
todo_1 = Todo.create!(
  title: 'Master algorithms',
  body: 'Read the algorithm design manual',
  done: false
)

todo_2 = Todo.create!(
  title: 'Get ina better shape',
  body: 'signup for a gym and workout for the next 30 days',
  done: true
)
