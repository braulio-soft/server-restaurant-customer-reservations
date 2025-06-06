const planModel = require('../models/planModel')

const getPlans = async (req, res) => {
    try {
        const plans = await planModel.getPlans();
        res.json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createPlan = async (req, res) => {
    try {
        const { name } = req.body;
        const plan = await planModel.createPlan(name);
        res.status(201).json(plan);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

const getPlanById = async (req, res) => {
    try {
        const plan = await planModel.getPlanById(req.params.id);
        if (!plan) return res.status(404).json({ mensaje: 'Not Found' });
        res.status(200).json(plan)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getPlans,
    createPlan,
    getPlanById
}