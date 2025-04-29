const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
/**
 * @swagger
 * /restaurants:
 *   get:
 *     summary: Get all restaurants
 *     responses:
 *       200:
 *         description: List of restaurants
 */
router.get('/', restaurantController.getRestaurants);
/**
 * @swagger
 * /restaurants/{id}:
 *   get:
 *     summary: Get a restaurant by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Restaurant ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Restaurant found
 *       404:
 *         description: Restaurant not found
 */
router.get('/:id', restaurantController.getRestaurantById);
/**
 * @swagger
 * /restaurants:
 *   post:
 *     summary: Create a new restaurant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Restaurant created
 */
router.post('/', restaurantController.createRestaurant);

module.exports = router