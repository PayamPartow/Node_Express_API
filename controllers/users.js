import { v4 as uuidv4 } from "uuid";

// we are writing the logic for each routing as a seperate object in this file and then exporting it
// then we import each object and add it to the routing in the users.js file in the routes folder

let users = [];

export const getUsers = (req, res) => {
  //   console.log(users);
  //   res.send("Hello");
  res.send(users);
};

export const createUser = (req, res) => {
  console.log("POST ROUTE REACHED");

  //   the new user we creat in the fromnt end and post is being stored in req.body
  const user = req.body;

  // note here we are spreading the user object and adding a unique id to it using the uuidv4 function
  users.push({ ...user, id: uuidv4() });

  res.send(`User with the username ${user.firstName} added to the database`);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  // filter out all the users which their id isn't the id of the one we wanted to delete
  // this will show all the users other than the one we wanted to delete
  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from databse`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  const userToBeUpdated = users.find((user) => user.id === id);

  if (firstName) userToBeUpdated.firstName = firstName;

  if (lastName) userToBeUpdated.lastName = lastName;

  if (age) userToBeUpdated.age = age;

  res.send(`User with id ${id} has been updated`);
};
