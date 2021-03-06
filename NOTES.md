# FRONTEND:

- [X] PROBLEM: clicking logout when NOT on home page, redirects to home but does NOT actually log the user out, it has to do with the fact that I'm using a component did mount to get the current user on the home page..., current solve, redirect to a page that does not have a get_current_user on componentDidMount --- such as login!
  - this seems weird though, because get_current_user is supposed to make a fetch to the backend and they session is supposed to be cleared, is it getting the current_user again before the session is cleared?
  - AND IT WORKS ON THE HOME PAGE BECAUSE HOME IS ALREADY MOUNTED!!

- theories: 
  - so because Home is NOT a private route, it is not redirected to the login page and it appropriately runs the componentDidMount and gets the currentUser
  - however if someone types in the url to go to myprofile or sightings it shows the login page because that runs before the componentDidMount, but they are not actually logged out which is why if they click button for home or type it in the URL it shows they are still logged in

- SOLVE:
  - because of async functions! I was trying to history.push('/') inside onClick of Logout and because the logout was happening after this was called, the session[:user_id] wasn't being cleared out before the componentDidMount on the home page. So by passing the history into the action creator I was able to push into the history and the user was cleared out so when the componentDidMount ran the user was already cleared out

- [X] New Problem: now when someone types the url to /myprofile or /sightings it redirects them to the login page!! AND they're not logged out if one clicks on the button to go to the Home page
  - solved by redirecting to Home so it's obvious they are still logged in

- [X] conditionally render signup and login buttons 
  - [X] should not show when logged in
  - [X] add these buttons to the vertical navbar
- [X] remove links on individual pages cause now i have a nav
- [X] PrivateRoute
  - [X] if not loggedIn /sightings and /myprofile should redirect to login page
- [X] signup and login pages should display navBar so that they can click on Home or the other button
- [X] modal has required fields
  - [X] add public input
- [X] add spinner for loading 
  - [X] sightings
  - [X] and selectedSighting
- [X] toggle modal closed on submit and reset form state
- [X] add sighting show page so can add comments eventually and a google map

- [X] if logged in, typing url to sightings or myProfile redirects to home page because of @@init first time they are not logged in
- [X] redirect from login or signup page if they are already logged in

# Sightings:
  - [] choose Identified or Non-identified (or both?)
	- [X] filter by category
    - [X] make controlled form
    - [X] why do I have to use this.state.filter.filter?? where is it doubling up? Silly me, did filter: [:name]: value, so of course it was doubling
  - [X] search by common_name or username
    - [X] add search by location
  - [X] sort by date_seen, alphabetically
  - [X] refactor sightingList class to reuse onChange functions
  - [X] REFACTOR SEARCH FILTER SORT TO DYNAMICALLY UPDATE USING REDUX THE NICKY WAY

# REFACTORS
  - [] signup controlled form in redux
  - [] login controlled form in redux
  - [] sightings controlled form in redux ?? maybe, might be difficult with edit also
  - [X] take sightings out of users serializer and iterate on front end to find current_user's sightings for showing their profile page (sending way too much info currently)
  - [X] refactor commentForm to reuse in modal for edit
      - [X] controlled form for commentForm to redux
  - [X] CONTAINERS (some of my components should be containers)
    - [X] SightingList
    - [X] what other components should be split up to hold containers?
      - [X] CommentFormModal
      - [X] myProfile
  - [X] HREFS IN A TAGS CAUSING ERRORS FROM SPRITES
  - [] iterate over categories to dynamically create select for making and editing a sighting instead of hardcoding in the categories

# CSS:
  - [X] pick and 
    - [X] import svg icons
  - [X] style signup page**
  - [X] style login page**
  - [X] sighting cardFront
  - [X] sighting cardBack (get more info link)
  - [X] move modal css to sass
    - [X] style comment form modal
  - [X] move loader css to sass
  - [X] style loader
  - [X] style modal
  - [X] style sighting show page
  - [X] style search, filter, sort
  - [] vertical nav sticky (post assessment)
  - [] active page on navbar is highlighted (post assessment)
  - [X] profile (username, name, new sighting button make perty) 
  - [X] add logo
  - [] add fade transitions
  
# BACKEND:
- [X] add validations
- [X] sightings should only display public sightings
- [X] use ActiveModel Serializer to convert data from snake case to camel case
- [X] handle converting camelCase to snake_case on the back end
  - almost able to remove sendableSightingData hash, had to use isPublic on frontend because public is a reserved key word, so still had to modify the sendable data since is_public is not a key in my database.
- [] change public to is_public
- [] nest comments routes under sightings
- [X] updated comment, how to keep rails from changing the order
- [X] add dependent destroy for comments to sightings
- [X] clean up routes not being used

# STRETCH:
 - [X] comments (has_many through relationship)
 - [] likes/favorites for sightings
 - [] add frontend library for validations
 - [X] show page for sightings where comments can be 
  - [X] added, 
  - [X] edited, 
  - [X] deleted by the owner
 - [] show page includes google map of location of the sighting based on city, region and country

# Minimal Requirements for Flatiron project:
- [X] The code should be written in ES6 as much as possible
  - [X] refactor functions to const as arrow functions
- [X] Use the create-react-app generator to start your project.
- [X] Your app should have one HTML page to render your react-redux application
- [X] There should be 5 stateless components (components that mapDispatch or mapStateToProps count because you're using props, not state)
- [X] There should be 3 routes
- [X] The Application must make use of react-router and proper RESTful routing (restful mostly applies to backend)
- [X] Use Redux middleware to respond to and modify state change
- [X] Make use of async actions and redux-thunk middleware to send data to and receive data from a server
- [X] Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods. (you can use async await)
- [X] Your client-side application should handle the display of data with minimal data manipulation
- [X] Your application should have great styling: remember, this is your final!

# Deploy
  - [X] rails api deployed to Heroku, can navigate to api/vs/sightings and see all the objects
  - [X] frontend deployed to heroku, can login, signup, and logout
    - when rails s runs and send request from Heroku frontend, raises cookie cross-site issue
    - when send request to heroku API using yarn start locally, raises same cookie cross-site issue
    - but now when both herokus being used there are no cors issues being raised it's just redirecting a shit ton to home, say what?? No wait, the issue is still there, I had just unchecked the third-party issue showing
    - BUT am wondering if it's really a cors issue or that weird complete auth business i implemented so users could type in the url...might have to wait and see if we get Jordan's working, cause if Jordan's works then maybe that work around isn't compatible with a live app...(just seems weird since works locally)
    - when rails s and yarn start going, it WORKS but the same cookie cross-site issue is raised the first time I add a comment
  - [X] DEPLOY FULLY FUNCTIONAL

  # Instructions to deploy the backend
    - cd into sightings-api
    - heroku login
    - heroku create nature-watch-api
    - git push heroku main
    - heroku rake db:schema:load
    - heroku rake db:seed
    - check endpoints
    - change urls to include request to heroku api
      - sends correct fetch data, set-cookie sameSite issue when using heroku api and local frontend
    - gem 'rails_same_site_cookie', '~> 0.1.8'
    - bundle install (fixes same_site none attribute problem, now can successfully refresh page without being logged in!)

  # Instructions to deploy the frontend
    - in root directory touch static.json
      inlude: { "root": "build/", "routes": { "/**": "index.html" } }
      allows for use of react-router
    - heroku create nature-watch
    - git push heroku main
    - add frontend url to initializers/cors.rb to accepted origins in api

  - in playing around with the redux store open, I noticed that the deployed app is running CLEAR_USER after the user is being set for navigating to a new page, but it does NOT do that when locals are run...so if I Skip that action in the redux store, it actually goes to the right place
    - tried doing that and navigating to the sighting page, and added a comment: 
    POST https://nature-watch-api.herokuapp.com/api/v1/comments 500 (Internal Server Error)
    sightings.js:160 Uncaught (in promise) SyntaxError: Unexpected end of JSON input
    at sightings.js:160
      - WHY this now? it works locally...
      - editting a sighting does change it, but it's not changing the redux store so I can see the changes in the sighting page and if I change public to private it no longer appears in the sightings all page even though it says it is a public sighting on the card
      - when posting a new sighting returns back a same errors as above for comments
      - upon refresh (and skipping the CLEAR_USER step) the edits are being saved in the database
      - Jordan when refreshing it causes a user to logout. However she can successfully navigate to a link. So it probably IS my weird begin and complete auth solve that is causing that issue. However she can succesfully edit and delete but NOT post. Because of an internal server error, there are no current_user.habits so current_user is nil
  - refactored so privateRoute is back to how it originally was (commented out code for now)
  - so now I can SEE sightings and edit but not add, however edits do not show up (because using get_current_user to refresh the redux store) so have to refresh to see the edits (but they DO show up on the sighting page) and refreshing causes the user to be logged out.
  - Changed the creation of a comment to not use current_user and instead pass in the user_id from the client. Result being that when running the heroku api and local client a user CAN add a comment. Confirming that the session info is not being sent successfully via credentials: "include" in the fetch requests. It also works when using heroku api and client.
  - Refactored to not call current_user in the backend, but instead pass the user_id from the frontend. This makes the app functional so users can add, edit and delete sightings and comments. 
  - Still have sessions issue to fix: using current_user.build is better practice, and users cannot enter a URL to navigate to a page (it logs them out) and if a user refreshes the page it logs them out.
  - try adding rails_same_site_cookie gem, tested on Heroku site, and IT WORKS!
  - succesfully reverted code to use current_user for making a new sighting and a new comment
  - [X] Try reimplementing Before and After Auth for page redirects 