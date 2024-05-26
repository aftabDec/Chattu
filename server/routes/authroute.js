const express = require("express");
const { login, register, logout, getOtherUsers } = require('../controller/authController')
const {isAuthenticated} = require('../middleware/protectedRoute')
const router = express.Router(); 




// Define routes using the controller functions

router.route('/logout').post(logout);
router.route('/login').post(login);
router.route('/register').post(register);
router.route("/other_users").get(isAuthenticated, getOtherUsers);





module.exports = router;
