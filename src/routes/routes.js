const express= require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');


router.route('/booking').post(bookingController.create)

module.exports = router;