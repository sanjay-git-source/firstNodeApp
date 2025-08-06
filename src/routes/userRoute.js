const express = require("express");
const userEntry = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/create-user", userEntry);

module.exports = userRouter;
