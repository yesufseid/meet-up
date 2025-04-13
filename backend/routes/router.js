const express = require("express");
const router = express.Router();
const {createActivity,getUserActivity} = require("../controllers/index");

// Define routes
router.route("/").get(getUserActivity).post(createActivity);


module.exports = router; 
