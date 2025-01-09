# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Product.create!(name:'Starship', price:0.99)
Product.create!(name:'Earth', price:0.00)
Product.create!(name:'Sun', price:1.99)
Product.create!(name:'Europa', price:0.00)
Product.create!(name:'Solar System', price:0.99)
Product.create!(name:'Quantum Galaxy', price:0.00)
Product.create!(name:'Multiverse', price:1.99)
Product.create!(name:'Mars', price:0.00)
Product.create!(name:'End', price:0.00)
