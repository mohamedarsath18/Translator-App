                                                    TRANSLATOR WEBSITE WITH LOGIN


## project-root-directory
|-- login-signup
|   |-- src
|   |   |-- config.js
|   |-- public
|   |   |-- style.css
|   |-- views
|   |   |-- login.ejs
|   |   |-- signup.ejs
|-- translator-web
|   |-- js
|   |   |-- countries.js
|   |   |-- script.js
|   |-- style.css
|   |-- index.html
|-- public
|   |-- your-shared-public-files.css
|-- index.js
|-- package.json
|-- node_modules


## Prerequisites:
•	Node.js installed on your machine.
•	MongoDB installed and running locally.

## Getting Started:
1.	Clone the repository or create the necessary files and directories.
2.	Install project dependencies by running: “npm install”
3.	Download packages “npm install express path bcrypt mongoose ejs” for login/signup pages.
4.	“npm install -g http-server” for translator packages. 

## Project Structure:
o	index.js: Main server file containing the Express app setup and route definitions.
o	login-signup: Directory Containing the login and signup related files.
o	Src/config.js: Mongoose model and schema definition for user data.
o	public/style.css: CSS file for styling login and signup pages.
o	views/login.ejs: EJS template for the login page.
o	views/signup.ejs: EJS template for the signup page.
o	Translator-web: Directory  containing the translator webpage related files.
o	index.html: HTML file for the translator web page.
o	style.css: CSS file for styling translator web page.
o	js/countries.js: For translate the contents.
o	js/script.js: Script for translator complete working.

## Usage:
1.	Start the MongoDB server : “mongod”.
2.	Run the Node.js Server: “node index.js”.
3.	Open your web browser and visit http://localhost:3000/ to access the login page.

## Features:
•	Login Page: User can log in using their username and password.
•	Signup Pages: New users can create and account by providing a unique username and password.
•	Translator web Page: After logging in, users can access the translator Web Page with sample translation data.

## Additional Notes:
•	Ensure MongoDB is running before starting the Node.js server.
•	Customize the translator-web functionally as needed.
