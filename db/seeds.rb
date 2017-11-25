# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all

demo_user = User.create(username: "Baby_demo", password: "password");
user1 = User.create(username: "Trung", password: "vhtm220");
user2 = User.create(username: "Roger", password: "vhtm220");
user3 = User.create(username: "Rafael", password: "vhtm220");
user4 = User.create(username: "Andre", password: "vhtm220");
user5 = User.create(username: "Pete", password: "vhtm220");


project1 = Project.create(
  title: "Toddler Busy Board: Peek-a-Boo Edition",
  description: "<p>Busy boards are just so cool!<p></br></br>
  <p>They’re an awesome DIY toy perfect for babies, toddlers, preschoolers, parents in their thirties… We made this board almost two years ago and it is still the most played with toy at our house by all the little ones who visit. It’s pretty much Hansel: it’s so hot right now.<p></br></br>
  <ul>Materials for a  Board<ul>
  <li>2 large plywood boards (one thick, one thin)</li>
  <li>Router</li>
  <li>Various door locks</li>
  <li>Combination lock</li>
  <li>Hose faucet</li>
  <li>Toggle switch</li>
  <li>Rope and pulley</li>
  <li>Light switch</li>
  <li>Caster wheel</li>
  <li>Utility chain</li>
  <li>Various screws</li></br></br>
  <p>What makes our board just a little different is that the doors open to reveal photos. We loved the idea of the boards we saw on Pinterest, but wanted the locks and doors to be functional and have purpose.<p></br></br>
  <p>To do this, my husband used two pieces of plywood, one thick and one thin. The thick board is the top layer. In that piece, he cut out the doors using a router then attached a thin piece of plywood to the back using screws.<p></br></br>
  <p>I added photos using double sided tape as a way to teach our kids the names and faces of extended family members. “Go find Grandma!” Watching those little brains work to remember which door and which face is priceless.<p></br></br>
  <p>Building a toddler busy board is one of the best DIY projects we’ve done and I’m so happy we have it. I can’t imagine ever getting rid of this! It has “future grandkids” written all over it. The added element of being a peek-a-boo toddler busy board makes it just a little more special.<p></br></br>",
  category: "Busy Board",
  img_url: "https://res.cloudinary.com/trungvuh/image/upload/c_fill,h_500,w_500,y_0/v1511543426/busyboardsquare-1_lz7cma.jpg",
  creator_id: demo_user.id
)
project2 = Project.create(
  title: "DIY child swing",
  description: "<p>Here's a little summer challenge for you! I put together somekind of instructions for this DIY children's swing. The model of this swing is a DIY version of a finnish children’s swing from somewhere between 70's and 80’s. My mother made a swing like this to me when I was a kid and now she made one for my daughter as well. Here are instructions to make your own children’s swing!<p></br></br>
  <p>Please notice that the swing with these measures is for a child between about 1-3 age -depending on a child's weight. You can support smaller babies with pillows to sit in the swing. To make the swing stronger you can try to use thicker wood sticks and thicker rope (you can check the weight limit of the rope while buying) with well sealed knot closings.<p></br></br>
  <ul>Materials for a  Board<ul>
  <li>2 large plywood boards (one thick, one thin)</li>
  <li>Router</li>
  <li>Various door locks</li>
  <li>Combination lock</li>
  <li>Hose faucet</li>
  <li>Toggle switch</li>
  <li>Rope and pulley</li>
  <li>Light switch</li>
  <li>Caster wheel</li>
  <li>Utility chain</li>
  <li>Various screws</li></br></br>
  <p>What makes our board just a little different is that the doors open to reveal photos. We loved the idea of the boards we saw on Pinterest, but wanted the locks and doors to be functional and have purpose.<p></br></br>
  <p>To do this, my husband used two pieces of plywood, one thick and one thin. The thick board is the top layer. In that piece, he cut out the doors using a router then attached a thin piece of plywood to the back using screws.<p></br></br>
  <p>I added photos using double sided tape as a way to teach our kids the names and faces of extended family members. “Go find Grandma!” Watching those little brains work to remember which door and which face is priceless.<p></br></br>
  <p>Building a toddler busy board is one of the best DIY projects we’ve done and I’m so happy we have it. I can’t imagine ever getting rid of this! It has “future grandkids” written all over it. The added element of being a peek-a-boo toddler busy board makes it just a little more special.<p></br></br>",
  category: "Active",
  img_url: "http://res.cloudinary.com/trungvuh/image/upload/c_scale,h_500,w_500/v1511545432/swing_1_rnkae3.jpg",
  creator_id: user1.id
)
project3 = Project.create(
  title: "BUSY BOARD FOR A BUSY {BIRTHDAY} BOY!",
  description: "<p>Busy boards are just so cool!<p></br></br>
  <p>They’re an awesome DIY toy perfect for babies, toddlers, preschoolers, parents in their thirties… We made this board almost two years ago and it is still the most played with toy at our house by all the little ones who visit. It’s pretty much Hansel: it’s so hot right now.<p></br></br>
  <ul>Materials for a  Board<ul>
  <li>2 large plywood boards (one thick, one thin)</li>
  <li>Router</li>
  <li>Various door locks</li>
  <li>Combination lock</li>
  <li>Hose faucet</li>
  <li>Toggle switch</li>
  <li>Rope and pulley</li>
  <li>Light switch</li>
  <li>Caster wheel</li>
  <li>Utility chain</li>
  <li>Various screws</li></br></br>
  <p>What makes our board just a little different is that the doors open to reveal photos. We loved the idea of the boards we saw on Pinterest, but wanted the locks and doors to be functional and have purpose.<p></br></br>
  <p>To do this, my husband used two pieces of plywood, one thick and one thin. The thick board is the top layer. In that piece, he cut out the doors using a router then attached a thin piece of plywood to the back using screws.<p></br></br>
  <p>I added photos using double sided tape as a way to teach our kids the names and faces of extended family members. “Go find Grandma!” Watching those little brains work to remember which door and which face is priceless.<p></br></br>
  <p>Building a toddler busy board is one of the best DIY projects we’ve done and I’m so happy we have it. I can’t imagine ever getting rid of this! It has “future grandkids” written all over it. The added element of being a peek-a-boo toddler busy board makes it just a little more special.<p></br></br>",
  category: "Busy Board",
  img_url: "http://res.cloudinary.com/trungvuh/image/upload/c_fill,h_500,w_500/v1511544567/busy-board-3_ehzl9b.jpg",
  creator_id: user2.id
)
project4 = Project.create(
  title: "Spider’s Web Discovery Basket",
  description: "<p>You can find a fantastic blog about sensory spider’s webs at House of Burke on the link below!<p></br></br>
  <p>I sat down to make a sensory board for Buddy last night with an insect theme, and had so much fun making the spider that I decided to make a spiders web for Buddy to play with. After I made this I had a quick google and found that this is by no means an original idea (darn it!)<p></br></br>
  <ul>Materials for a  Board<ul>
  <li>2 large plywood boards (one thick, one thin)</li>
  <li>Router</li>
  <li>Various door locks</li>
  <li>Combination lock</li>
  <li>Hose faucet</li>
  <li>Toggle switch</li>
  <li>Rope and pulley</li>
  <li>Light switch</li>
  <li>Caster wheel</li>
  <li>Utility chain</li>
  <li>Various screws</li></br></br>
  <p>What makes our board just a little different is that the doors open to reveal photos. We loved the idea of the boards we saw on Pinterest, but wanted the locks and doors to be functional and have purpose.<p></br></br>
  <p>To do this, my husband used two pieces of plywood, one thick and one thin. The thick board is the top layer. In that piece, he cut out the doors using a router then attached a thin piece of plywood to the back using screws.<p></br></br>
  <p>I added photos using double sided tape as a way to teach our kids the names and faces of extended family members. “Go find Grandma!” Watching those little brains work to remember which door and which face is priceless.<p></br></br>
  <p>Building a toddler busy board is one of the best DIY projects we’ve done and I’m so happy we have it. I can’t imagine ever getting rid of this! It has “future grandkids” written all over it. The added element of being a peek-a-boo toddler busy board makes it just a little more special.<p></br></br>",
  category: "Basket",
  img_url: "http://res.cloudinary.com/trungvuh/image/upload/c_fill,h_500,w_500/v1511544863/basket-1_qvmlda.jpg",
  creator_id: user4.id
)
project5 = Project.create(
  title: "No-Scratch Baby Mittens",
  description: "<p>All three of my babies were born doing the cooler months of the year. My oldest was born early April, which in Pennsylvania is still pretty cold. Carter was born in January and my daughter Addyson was born in November.  These no scratch baby mittens were made of our flannel for my babies but these can easily be made with two lighter cotton fabric pieces for those hot summer babies.<p></br></br>
  <p>I’ll be honest with you, I didn’t use baby mittens as much as I thought I would but when I did use them they worked great.  I typically used them when I was out and about running errands.  It helped protect my babies hands from the well intentioned women and small children that wanted to “ooh” and “aww” over my newest treasure. <p></br></br>
  <ul>Materials for a  Board<ul>
  <li>2 large plywood boards (one thick, one thin)</li>
  <li>Router</li>
  <li>Various door locks</li>
  <li>Combination lock</li>
  <li>Hose faucet</li>
  <li>Toggle switch</li>
  <li>Rope and pulley</li>
  <li>Light switch</li>
  <li>Caster wheel</li>
  <li>Utility chain</li>
  <li>Various screws</li></br></br>
  <p>What makes our board just a little different is that the doors open to reveal photos. We loved the idea of the boards we saw on Pinterest, but wanted the locks and doors to be functional and have purpose.<p></br></br>
  <p>To do this, my husband used two pieces of plywood, one thick and one thin. The thick board is the top layer. In that piece, he cut out the doors using a router then attached a thin piece of plywood to the back using screws.<p></br></br>
  <p>I added photos using double sided tape as a way to teach our kids the names and faces of extended family members. “Go find Grandma!” Watching those little brains work to remember which door and which face is priceless.<p></br></br>
  <p>Building a toddler busy board is one of the best DIY projects we’ve done and I’m so happy we have it. I can’t imagine ever getting rid of this! It has “future grandkids” written all over it. The added element of being a peek-a-boo toddler busy board makes it just a little more special.<p></br></br>",
  category: "Clothing",
  img_url: "http://res.cloudinary.com/trungvuh/image/upload/c_fill,h_500,w_500/v1511545010/Baby-Mittens-1_k7molo.jpg",
  creator_id: user5.id
)
project6 = Project.create(
  title: "Make Your Own Felt Board (Tutorial)",
  description: "<p>Busy boards are just so cool!<p></br></br>
  <p>They’re an awesome DIY toy perfect for babies, toddlers, preschoolers, parents in their thirties… We made this board almost two years ago and it is still the most played with toy at our house by all the little ones who visit. It’s pretty much Hansel: it’s so hot right now.<p></br></br>
  <ul>Materials for a  Board<ul>
  <li>2 large plywood boards (one thick, one thin)</li>
  <li>Router</li>
  <li>Various door locks</li>
  <li>Combination lock</li>
  <li>Hose faucet</li>
  <li>Toggle switch</li>
  <li>Rope and pulley</li>
  <li>Light switch</li>
  <li>Caster wheel</li>
  <li>Utility chain</li>
  <li>Various screws</li></br></br>
  <p>What makes our board just a little different is that the doors open to reveal photos. We loved the idea of the boards we saw on Pinterest, but wanted the locks and doors to be functional and have purpose.<p></br></br>
  <p>To do this, my husband used two pieces of plywood, one thick and one thin. The thick board is the top layer. In that piece, he cut out the doors using a router then attached a thin piece of plywood to the back using screws.<p></br></br>
  <p>I added photos using double sided tape as a way to teach our kids the names and faces of extended family members. “Go find Grandma!” Watching those little brains work to remember which door and which face is priceless.<p></br></br>
  <p>Building a toddler busy board is one of the best DIY projects we’ve done and I’m so happy we have it. I can’t imagine ever getting rid of this! It has “future grandkids” written all over it. The added element of being a peek-a-boo toddler busy board makes it just a little more special.<p></br></br>",
  category: "Busy Board",
  img_url: "http://res.cloudinary.com/trungvuh/image/upload/c_fill,w_600/v1511544685/busy-board-4_bc652b.png",
  creator_id: user3.id
)
