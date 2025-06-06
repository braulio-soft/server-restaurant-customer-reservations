const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');
//const reservationController = require('../controllers/reservationController');
/**
 * @swagger
 * /plans:
 *   get:
 *     summary: Get all plans
 *     responses:
 *       200:
 *         description: List of Plans
 */
router.get('/', planController.getPlans);
/**
 * @swagger
 * /plans/{id}:
 *   get:
 *     summary: Get a plan by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Plan ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plan found
 *       404:
 *         description: Plan not found
 */
router.get('/:id', planController.getPlanById);
/**
 * @swagger
 * /plans:
 *   post:
 *     summary: Create a new plan
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
 *         description: Plan created
 */
router.post('/', planController.createPlan);

//router.post('/:id/reservations', reservationController.createReservation);
//router.delete('/:planId/reservations/:id', reservationController.deleteReservation);

module.exports = router