const restaurantModel = require('../models/restaurantModel')

const getRestaurants = async (req, res) => {
    try {
        const restaurants = await restaurantModel.getRestaurants();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createRestaurant = async (req, res) => {
    try {
        const { name } = req.body;
        const restaurant = await restaurantModel.createRestaurant(name);
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await restaurantModel.getRestaurantById(req.params.id);
        if (!restaurant) return res.status(404).json({ mensaje: 'Not Found' });
        res.status(200).json(restaurant)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getRestaurants,
    createRestaurant,
    getRestaurantById
}