const express= require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');


router.route('/booking').post(bookingController.create)

router.route('/home').get((req,res)=>{
    return res.json({message:"Ok"})
})

module.exports = router;