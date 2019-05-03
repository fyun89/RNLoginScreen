# RNLoginScreen

This project demonstrates a sample working login mobile application. The application has been developed based on iPhone X using iOS version 12.1.

You can see a video demo of the working app here:
[Youtube](https://youtu.be/3kOxEjzd2Q0)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

This project is built for iOS and is required to use Xcode to view the app. To run Xcode, one must use MacOS (High Sierra or later).

[Node.js](https://nodejs.org/en/) - Backend server framework and to use NPM
[Xcode](https://developer.apple.com/xcode/) - Developer tool to create iOS apps

### Installation and run

Download the files to your directory:

```
git clone https://github.com/fyun89/RNLoginScreen
```

Inside the project folder, install the dependencies:

```
npm install
```

To run the server:

```
npm run start-server
```

To run the client (mobile app on virtual iPhone):

```
react-native run-ios
```


## Built With

* [React Native](https://facebook.github.io/react-native/docs/getting-started) - Tool to create mobile apps using JavaScript and React
* [Node.js](https://nodejs.org/en/) - JavaScript runtime environment for backend
* [Xcode](https://developer.apple.com/xcode/) - Developer tool to create iOS apps
* [Express](http://expressjs.com/) - Web framework for Node.js

## Features:
* Basic login features (user name input, password input, login button)
* Basic account view with logout feature
* Keyboard avoiding view
* Hide password input
* Demo of two fold security (HTTPS using OpenSSL and encrypting user credentials - simplified for demo purposes)
* Limit incorrect login attempts (to protect from malicious activities such as dictionary attack)
* Alert messages to inform login attempt status
