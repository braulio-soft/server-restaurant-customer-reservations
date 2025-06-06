const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
//const reservationController = require('../controllers/reservationController');
/**
 * @swagger
 * /items:
 *   get:
 *     summary: Get all items
 *     responses:
 *       200:
 *         description: List of Items
 */
router.get('/', itemController.getItems);
/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Get a item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Item ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item found
 *       404:
 *         description: Item not found
 */
router.get('/:id', itemController.getItemById);
/**
 * @swagger
 * /items:
 *   post:
 *     summary: Create a new item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Item created
 */
router.post('/', itemController.createItem);

//router.post('/:id/reservations', reservationController.createReservation);

//router.delete('/:itemId/reservations/:id', reservationController.deleteReservation);

module.exports = router