FRONTEND:

[] PROBLEM: clicking logout when NOT on home page, redirects to home but does NOT actually log the user out wtf mate?
[] conditionally render signup and login buttons 
  [] should not show when logged in
  [] move these buttons to the vertical navbar
[] remove links on individual pages cause now i have a nav
[] PrivateRoute
  [] if not loggedIn /sightings and /myprofile should redirect to home where they can click on login or signup
[] signup and login pages should display navBar so that they can click on Home or the other button
[] active page on navbar is highlighted
[] modal has required fields
  [] add public input

  
BACKEND:
[] add validations
[] sightings should only display public sightings

STRETCH:
[] comments (has_many through relationship)