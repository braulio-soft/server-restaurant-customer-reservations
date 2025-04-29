const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const reservationController = require('../controllers/reservationController');

router.get('/', customerController.getCustomers);

router.get('/:id', customerController.getCustomerById);

router.post('/', customerController.createCustomer);

router.post('/:id/reservations', reservationController.createReservation);

router.delete('/:customerId/reservations/:id', reservationController.deleteReservation);

module.exports = router