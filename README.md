# wdi-project-4

Mode

A virtual wardrobe application.

Overview

This was many years in the making for me. I had always saved pictures of the clothes I had bought in a virtual wardrobe on my phone then used an editing app to create outfits. Maybe a little strange but it turned out to be really efficient and I soon had friends asking me to do the same for them. It was always in the back of my mind that I wanted to do this, I knew there were apps that existed already but I found them clunky and not very visually appealing.

Queue 'Mode' (Swedish word for fashion), a MEAN stack RESTful app, built using my own API and designed using bootstrap and SASS. I initially envisioned it as a Ruby on Rails app however I decided practising my Angular.js would be more beneficial in the current market so made the switch and managed to get an MVP within four days of starting the project.

The biggest focus for me was ensuring a slick customer journey and beautiful visuals, I wanted something that myself and my friends would actually want to use.


Visual Inspiration

I decided to keep the colour scheme very minimal and already knew that I wanted the site to have a minimalist theme. I was inspired my Net-A-Porter, COS and &otherstories sites who had white backgrounds, accent colours and focused on the imagery to display there branding.

![Alt text](/src/colours.jpg?raw=true)


How it works

Once the user logs in or registered they are taken to the landing page. From here they have the option to view their wardrobe (individual clothing items) or full outfits.

On the item page they will be shown all of their items and be able to click on the hanger to add any. I toyed with a few different ways of the user selecting their items as I wantesd

alt text

ior

If at any point during the date planning process, the user want to run a new search, they can click the 'Date Mate London' home button in the top right hand corner of the screen to go back to the first step - 'Plan your date'.

Planning

Wireframing

I used both written and online wireframes to work out the user-journey and ensure that I had captured all of the elements needed. I initially worked from a mobile responsive viewpoint as, after speaking to various friends about this idea they suggested this would be the most useful version of the app.

///

API

I researched which APIs would best suit the app and quickly came to the conclusion that for restaurants Zomato had the best data. It was more of a struggle to find solid data for bars, with the result that there was going to be a signifcant gap in the amount of data aviable for restaurants and bars. Ultimately I decided to use both the Zomato and Google PLaces API and came to the decision that it would be best to serve data to the site to come from my own API. This would allow me to have more uniform data between my bars and restaurants, ultimately making the code in the front end more legible and neat.

I therefore wrote 2 seeds files - one for restaurants and one for bars. In order to make use of the useful data available acoss both the Zomato and Google Places APIs (as well as the various types of query available from both sources). Using request promise, I set up functions that would make three API requests in total. For restaurants, I first queried the Zomato API for inital properties, before updating objects with further information from two Google Places searches (a search by the name of the restaurant and then a place details search using the placeId from the previous search). A simialr search was used for bars, but rather than initially querying Zomato, I merely ran a keyword search in the Google Places API (i.e. [name of area]+cocktails+london)

Ultimately I was happy with the amount of data coming in, though with mroe time, I would certainly like to improve the approach for collecting data on bars.

Technnology used

HTML5
SCSS
jQuery
Node.js
Express.js
Gulp
Bower
GoogleMaps API
Google Places API
Zomato API
