const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
//const reservationController = require('../controllers/reservationController');
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: List of Products
 */
router.get('/', productController.getProducts);
/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product found
 *       404:
 *         description: Product not found
 */
router.get('/:id', productController.getProductById);
/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
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
 *         description: Product created
 */
router.post('/', productController.createProduct);

//router.post('/:id/reservations', reservationController.createReservation);
//router.delete('/:productId/reservations/:id', reservationController.deleteReservation);

module.exports = router