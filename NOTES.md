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
- [] active page on navbar is highlighted
- [X] modal has required fields
  - [X] add public input
- [] add spinner for loading 
  - [X] sightings
  - [] and user
- [X] toggle modal closed on submit and reset form state

# Sightings:
  - [] choose Identified or Non-identified
	- [] filter by category 
  - [] search by name or location or username
  - [] sort by date_seen, alphabetically

# CSS:
  - [X] pick and 
    - [] import svg icons
  - [] style signup page
  - [] style login page
  - [] sighting cardFront
  - [] sighting cardBack
  - [] move modal css to sass
  - [] move loader css to sass
  - [] style loader
  - [] style modal
  
# BACKEND:
- [X] add validations
- [X] sightings should only display public sightings

# STRETCH:
 - [] comments (has_many through relationship)
 - [] likes/favorites for sightings
 - [] add frontend library for validations