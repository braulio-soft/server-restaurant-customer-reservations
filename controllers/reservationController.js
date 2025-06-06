const reservationModel = require('../models/reservationModel')
const userService = require('../models/userModel');
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

        const userValidate = await userService.getUserById(req.params.id);
        if (!userValidate) return res.status(404).json({ message: "Not found costumer" })

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
        const { userId, id } = req.params;
        const userValidate = await userService.getUserById(userId);
        if (!userValidate) return res.status(404).json({ message: "Not found costumer" })

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