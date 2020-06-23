
<p align="center">
  
  <a>
    <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="React hooks tetris" width="72" height="72">
  </a>
</p>
<h3 align="center"> React hooks tetris </h3>

<p align="center">
Extension of the following tutorial: https://www.youtube.com/watch?v=ZGOaCxX8HIU (by Weibenfalk https://www.youtube.com/user/Weibenfalk, powered by freeCodeCamp https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ) with Leaderboard stored in Firebase.
</p>

## Table of contents
1. [Quick start](#quickstart)
2. [Features](#features)
## Quick start <a name="quickstart"></a>
1. Download or clone the repository to your local machine
2. Install npm packages by running:
```
 npm install
```
3. Follow the following Firebase get started tutorial in order to create the firebase configuration JSON: https://firebase.google.com/docs/database/web/start?authuser=0
4. Create .env file in the root folder of your project
5. Add the firebase config with the following format (please remember to remove < and >):
```
REACT_APP_FIREBASE_API_KEY=<your_firebase_app_key>
REACT_APP_FIREBASE_MESSAGING_SENDING_ID=<your_firebase_messaging_sending_id>
REACT_APP_FIREBASE_APP_ID=<your_firebase_app_id>
```
6. Start the project by running:
```
 npm start
```

## Features <a name="features"></a>
I followed the tutorial and the code covered in the video is the same as the one in this repo: https://github.com/weibenfalk/react-tetris-starter-files. On top of this I added the Firebase hook that will upload the leaderboard.

### How it works?
The user has to provide user name before starting the game or automatic random user name will be created. Once the game is finished, the results will be automatically uploaded to the firestore in a document called 'Leaderboard'. The end result looks something like this:

![Demo](https://github.com/vgagaleski/react-tetris-app/blob/master/demo.png)
