const express = require('express');

const router = express.Router();


const userController = require("../Controllers/userController");

router.get("/profile",userController.getUserProfile)
router.get("/all-users",userController.getAllUsers)


module.exports = router