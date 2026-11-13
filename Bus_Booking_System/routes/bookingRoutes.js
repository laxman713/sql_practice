const express = require('express');
const router = express.Router();
const bookingController = require("../controllers/bookingController")



router.post('/bookings',bookingController.bookingEntry);
router.get('/users/:userId/bookings', bookingController.getUserBookings);
module.exports = router;