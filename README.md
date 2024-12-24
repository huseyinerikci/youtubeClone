# YouTube Clone - React & Tailwind CSS
This project is a YouTube clone developed using React and Tailwind CSS. This application has basic features such as listing, watching, searching and filtering video content by category in a YouTube-like interface. It offers a user experience supported by React and popular libraries.
## Preview
A preview of my youtube clone project is in the gif below.

![youtubeclone](https://github.com/user-attachments/assets/8696b309-029d-4535-967f-5fcec1f110df)

## 🚀 Features
* Video Listing and Categories: Videos can be listed in various categories (trend, music, movies, etc.) on the homepage.
* Dynamic Video Content: When a category is selected, videos belonging to that category are pulled from the API with Axios and displayed dynamically on the page.
* Preview and Playback: When you hover over videos using React-Player, the video preview is automatically shown.
* Video Detail: Clicking on a video takes you to the video detail page. Video description, comments and recommended videos are shown here.
* Filtering and Search: Search can be made according to video titles with the search bar. Results are instantly filtered.
* More Videos: All videos obtained via the API can be shown with the "More" button.
* Responsive Design: Tailwind CSS was used to make the application fully responsive and compatible with mobile and desktop devices.
* Number Editing: With the Millify library, large numbers (for example, viewing numbers) are displayed in a more readable format.
* Page Transition: React-Router-Dom is used to navigate between pages within the application.
* Icon Support: Icons have been added to videos, categories and other elements using React-Icons.
* Loading Feature: While data is being retrieved from the API, a loader animation is shown to the user during the loading process. This ensures that the application provides a user-friendly experience.

## 📦 Technologies and Libraries
* React: The application was developed using React.js, which offers a dynamic structure through components.
* Tailwind CSS: It is a utility-first CSS framework used to make fast and flexible style adjustments.
* React-Player: It is a React-based video player. It is used to play and preview videos.
* React-Router-Dom: React library used to navigate between pages and manage URL redirects.
* Axios: Popular HTTP client used to send requests to API and retrieve data.
* Millify: A library used to make numbers more readable (for example, view counts are shown in 1K, 1M format).
* React-Icons: A library used to add icons to React applications. This library is preferred for various icons in the application.
* React Loader Spinner: A library used to show a loading animation to users while data is loading.
