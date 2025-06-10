const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//const reservationController = require('../controllers/reservationController');
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags:
 *        - Users
 *     responses:
 *       200:
 *         description: List of Users
 */
router.get('/', userController.getUsers);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */
router.get('/:id', userController.getUserById);
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - first_name
 *               - last_name
 *               - email
 *               - password
 *               - phone_number
 *               - age
 *             properties:
 *               first_name:
 *                 type: string
 *                 example: John
 *               last_name:
 *                 type: string
 *                 example: Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: secret123
 *               phone_number:
 *                 type: string
 *                 example: "+1234567890"
 *               age:
 *                 type: integer
 *                 example: 30
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', userController.createUser);

/**
 * @swagger
 * /users/{id}/reservations:
 *   post:
 *     summary: Create a reservation for a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               partyCount:
 *                 type: integer
 *               restaurantId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Reservation created
 */

//router.post('/:id/reservations', reservationController.createReservation);
/**
 * @swagger
 * /users/{userId}/reservations/{id}:
 *   delete:
 *     summary: Delete a reservation for a user
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Reservation deleted
 *       404:
 *         description: User or reservation not found
 */
//router.delete('/:userId/reservations/:id', reservationController.deleteReservation);

module.exports = router