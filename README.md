## React Gallery App

As a fullstack JavaScript developer you will have to deal with both the frontend and be able to communicate and write applications to and for the backend.
For this project I've created a Gallery app that uses the React library to display the pictures retrieved from the Flickr API. Below I listed the features of this application.

# Features

- A user can query the Flickr API for photos
- Load indicator when the app is fetching data.
- Dynamically changes the URL path when a user performs a search.
- Friendly 404 page when accessing routes that don't exist.
- Friendly message if no results are found when querying the Flickr API

## How to use this app?

Before you can use this app you need to request a non commercial API key at: https://www.flickr.com/services/apps/create/apply
Afterwards you have to create a config file and list the following lines:

```
const apiKey = "your_api_key_here";
export default apiKey;
```

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies neccessary for this project.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More

This project is part of the fullstack JavaScript Techdegree from Treehouse.
For more information relate to: https://join.teamtreehouse.com/techdegree/

## Future improvements

- Pagination
- Applying Context API / Redux

## Reflection

Initially when working on this project I was overwhelmed about the complexity of React. When I was reading documentation and learning the basics of React,
my head couldn't quite grasp the concepts and I started thinking will I be able to get through this material? And the answer is definitely yes.

I started out building the components bit by bit, realising the way I had done it at first, creating category components for each category wouldn't be efficient. So instead I created one single Gallery component that creates a list of Photo components. When my components were built I decided it was time to start working on adding Routing, the concept I found the easiest one to implement. After it was all set I implemented the data fetching part of the application and I had to deal with state, this was a fun and interactive way to really learn what React is all about. And finally I cleaned up the project, made sure there were no warnings and errors. Provided code comments, created a Readme file with all the necessary information and processed the feedback that I got after I submitted my project for peer review.

For future projects I will definitely have to practice more with what React has to offer but I'm starting to grasp the foundation of this beautiful library.
