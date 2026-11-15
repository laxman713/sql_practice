const express = require('express');
const router = express.Router();
const routeController = require("../controllers/reviewController") 


router.post("/addReview",routeController.reviewEntry)

module.exports = router