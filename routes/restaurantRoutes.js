const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/', restaurantController.getRestaurants);

router.get('/:id', restaurantController.getRestaurantById);

router.post('/', restaurantController.createRestaurant);

module.exports = router