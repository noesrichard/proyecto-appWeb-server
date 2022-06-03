const express = require('express')
const router = express.Router(); 

const bookingController = require('../controllers/bookingController');



router.post('/', bookingController.create);
router.get('/', bookingController.list);

module.exports = router
