const express = require("express");
const { sendMessage,getMessage } = require('../controller/messageController')
const {isAuthenticated} = require('../middleware/protectedRoute')
const router = express.Router(); 

router.route("/send/:id").post(isAuthenticated, sendMessage)
router.route("/:id").get(isAuthenticated, getMessage);

module.exports = router;