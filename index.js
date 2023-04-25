// adding type : module to the package.json file enables us to use the import statment
import express from "express";
// allows us to take in incoming post request bodies
import bodyParser from "body-parser";

// note : in order to view changes on our server and not have to close and re open the server everytime we make a change
// we install and use a package called nodemon (npm install --save -dev nodemon)
//  in order to use the package in package.json under scripts we get rid of test and add
// "start" : "nodemon index.js"
//  now save the file and run from terminal using npm start

import usersRoutes from "./routes/users.js";

// the whole application lies in this variable
const app = express();

// using the port for backend (front end is usually 3000)
const PORT = 5000;

// inirtializing bodyPaerser middleware
// says we are going to be using JSON data in our whole application
app.use(bodyParser.json());

// set the starting path for all the routes in the user file
app.use("/users", usersRoutes);

// need to create routing which we can visit with our browser or we can send requests to
// first parameter is the path we are expecting that request to '/'(or homepage) in this case
app.get("/", (req, res) => {
  res.send("Hello from Homepage.");
});

// creating routs for users

// make application listen for incoming requests
// specify the port we are going to listen on and implement a call back function to be executed once we run this server
app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
