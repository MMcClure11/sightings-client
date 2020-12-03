FRONTEND:

[X] PROBLEM: clicking logout when NOT on home page, redirects to home but does NOT actually log the user out, it has to do with the fact that I'm using a component did mount to get the current user on the home page..., current solve, redirect to a page that does not have a get_current_user on componentDidMount --- such as login!
[] conditionally render signup and login buttons 
  [X] should not show when logged in
  [] move these buttons to the vertical navbar
[] remove links on individual pages cause now i have a nav
[X] PrivateRoute
  [X] if not loggedIn /sightings and /myprofile should redirect to login page
[] signup and login pages should display navBar so that they can click on Home or the other button
[] active page on navbar is highlighted
[] modal has required fields
  [] add public input

  
BACKEND:
[] add validations
[] sightings should only display public sightings

STRETCH:
[] comments (has_many through relationship)