# SwapSpace

### SwapSpace is a ReactJS web application for trading items. May 8th-20th, 2020
#### By: Benjamin Thom

## Description

_This web application utilizes the MERN stack to provide users with a easy to use tool for finding and trading items by filtering trade items by their monetary value and zip code._

## Component Tree
![component tree](public/swap-space-component-tree.png)

## Wireframe Design
![wireframe](public/swap-space-wireframe-design.png)

## Specification User Stories
* A user should be able to create trade items using a New Item Form with the following details:
  * name
  * description
  * image(s)
  * monetary value
  * zip code
* A user should be able to view a list of trade items
* A user shoud be able to click a button to add additonal trade items

## Setup/Installation Requirements

#### Node install

###### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

_Install Git with the following command:_
* $ brew install git

_Next, install Node.js by entering the following command in Terminal:_
* $ brew install node

###### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._

### MongoDB install:

###### For macOS:
_Install MongoDb by running the following command:_
* $ brew install mongodb

###### For Windows and Linux:

_Please visit the [MongoDB website](https://docs.mongodb.com/manual/administration/install-community/) for installation instructions._

#### Install this application

_Clone this repository via Terminal using the following commands:_
* _$ cd desktop_
* _$ git clone swap-space_
* _$ cd swap-space_
_Then, confirm that you have navigated to the swap-space project directory by entering "pwd" in Terminal._

_Install npm at the project's root directory via the following commands:_
* _$ npm install_
* _$ npm run build_

_Next open two integrated terminal instances and run the following commands to verify that the MongoDB database and the NodeJS server are running in the backend:_
* Terminal 2: 
  * _$ mongod_
    * _MongoDB should now be running and the terminal should display a prompt stating "waiting for connections on port 27017"_
* Terminal 3:
  * _$ nodemon server_
    * _nodemon should now be running and the terminal should display two prompts, #1 "Server is running on  Port 4000", and #2 "MongoDB database connection established successfully"_

_Open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code on macOS, enter the command "code ." in Terminal)._

## Technologies Used

* Git
* JavaScript
* Bootstrap
* Webpack
* ReactJS
* NodeJS
* Mongoose
* ExpressJS
* MongoDB
* Axios

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Benjamin Thom_** 