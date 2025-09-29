const captainModel = require("../models/captain.model");
const { validationResult } = require('express-validator');
const captainService = require("../services/captain.service");

module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;
    const isCaptainExists = await captainModel.findOne({ email });
    if (isCaptainExists) {
        return res.status(400).json({ message: 'Captain already exists' });
    }
    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        fullname,
        email,
        password: hashedPassword,
        vehicle
    });

    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
}