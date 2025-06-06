const paymentModel = require('../models/paymentModel')

const getPayments = async (req, res) => {
    try {
        const payments = await paymentModel.getPayments();
        res.json(payments);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createPayment = async (req, res) => {
    try {
        const { name } = req.body;
        const payment = await paymentModel.createPayment(name);
        res.status(201).json(payment);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

const getPaymentById = async (req, res) => {
    try {
        const payment = await paymentModel.getPaymentById(req.params.id);
        if (!payment) return res.status(404).json({ mensaje: 'Not Found' });
        res.status(200).json(payment)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getPayments,
    createPayment,
    getPaymentById
}