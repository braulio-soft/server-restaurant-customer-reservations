const reservationModel = require('../models/reservationModel')
const customerService = require('../models/customerModel');
const restaurantService = require('../models/restaurantModel');

const getReservations = async (req, res) => {
    try {
        const reservations = await reservationModel.getReservations();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createReservation = async (req, res) => {
    try {
        const { partyCount, restaurantId } = req.body;

        const customerValidate = await customerService.getCostumerById(req.params.id);
        if (!customerValidate) return res.status(404).json({ message: "Not found costumer" })

        const restaurantValidate = await restaurantService.getRestaurantById(restaurantId);
        if (!restaurantValidate) return res.status(404).json({ message: "Not found restaurant" })

        const reservation = await reservationModel.createReservation(req.params.id, partyCount, restaurantId);
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}


const deleteReservation = async (req, res) => {
    try {
        const { customerId, id } = req.params;
        const customerValidate = await customerService.getCostumerById(customerId);
        if (!customerValidate) return res.status(404).json({ message: "Not found costumer" })

        await reservationModel.deleteReservation(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}


module.exports = {
    getReservations,
    createReservation,
    deleteReservation
}