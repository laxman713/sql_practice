const express = require('express');
const router = express.Router();



const userRoute = require("../controllers/userController");

router.post('/users',userRoute.addEntry);
router.get('/users',userRoute.retrievEntry);


module.exports = router;

