const customerModel = require('../models/customerModel')

const getCustomers = async (req, res) => {
    try {
        const customers = await customerModel.getCustomers();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createCustomer = async (req, res) => {
    try {
        const { name } = req.body;
        const customer = await customerModel.createCustomer(name);
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

const getCustomerById = async (req, res) => {
    try {
        const customer = await customerModel.getCostumerById(req.params.id);
        if (!customer) return res.status(404).json({ mensaje: 'Not Found' });
        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getCustomers,
    createCustomer,
    getCustomerById
}