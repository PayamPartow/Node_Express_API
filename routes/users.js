import express from "express";

// uuid npm package is used to assign a unique id to each user
import { v4 as uuidv4 } from "uuid";

// imported the logic of each router from users.js in controllers folder
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

// initializing our router
const router = express.Router();

// all routes in here are starting with /users
router.get("/", getUsers);

// note browsers can only handle get requests
// need another software for testing our API
// using postman in this case
router.post("/", createUser);

// note when putting : means we are expecting any value after the user's path

//   /users/2 => req.params {id:2}
// geting a specific user based on their id
router.get("/:id", getUser);

// deleting a user
router.delete("/:id", deleteUser);

// updating a user
// put method is used when completly overwriting
// patch used when only changing some parts of an object
router.patch("/:id", updateUser);

// so we can make use of it in index.js
export default router;
