# Recipe-app


This is a MERN app that consumes the spoonacular API to enable search on a variety of foods. Users are able to add and store recipes in a list, alternativey they can generate meal plans.

To view a live version of the app, please click [here](https://INSERTLINK/)


This app was built using:
- MongoDB and Mongoose
- Express
- React JS
- Node JS

Other features include:
- Fetching and utilizing data from the Spoonacular API
- bcrypt hashing for password storage and checking
- Material UI components for styling and structure
- Express-session and MongoDB-session for Signin / out functionality

The app as deployed using MongoDB Atlas and Heroku.

---

### Planning

I was interested in using an API in my project. After some research, I decided on using the spoonacular API to do a food based app.

After deciding on a route to take, I created user stories to further isolate features and purpose of the app
#### User Stories
<img width="756" alt="User_stories" src="https://user-images.githubusercontent.com/104814228/186780272-a537a6ae-ed35-4839-bad0-c50f1342c0e4.png">

After I had a good idea of the apps purpose, I planned what would be required for a minimal viable product

#### MVP
<img width="756" alt="MVP" src="https://user-images.githubusercontent.com/104814228/186779865-e6dc37b8-13f2-48b4-92e9-acbaf2c20937.png">

#### Stretch goals
<img width="756" alt="Stretch_goals" src="https://user-images.githubusercontent.com/104814228/186780490-b3233db1-a704-436d-80aa-a7b3069f6b20.png">

#### Wireframes
<img width="518" alt="Home" src="https://user-images.githubusercontent.com/104814228/186780586-076cafbc-3f95-443d-8fb8-2132d9c5ced6.png">
<img width="316" alt="MyMeals" src="https://user-images.githubusercontent.com/104814228/186780596-c6b2dcc8-5eac-4de8-9bc1-f47028fe54d1.png">
<img width="429" alt="Preferences" src="https://user-images.githubusercontent.com/104814228/186780599-73d97254-d887-427f-a4c4-5751ec287208.png">
<img width="350" alt="Search" src="https://user-images.githubusercontent.com/104814228/186780602-968dff39-1e19-4b72-a5e4-209423909125.png">
<img width="428" alt="SearchResults" src="https://user-images.githubusercontent.com/104814228/186780607-218bd0ac-bb90-42d8-8d1f-5580b6b03ce1.png">

---

### Implementation

The app's UI was built using a combination of [styled components](https://styled-components.com/) and [MUI components](https://mui.com/components/).
Technologies used were React for the front end and Express & MongoDB for the back end.

A `recipes` controller and model handles the database manipulation in MongoDB for recipes a user has saved to a list
A `mealplan` controller and model handles the database manipulation in MongoDB for meal plans
A `users` controller handles the database of users, as well as signing in and out of sessions. 
The normal RESTful routes were adhered to in order to process database collections.

---

### Future Update Options
Options include fulfilling the criteria established in the stretch goals during the planning phase.

---

