const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String, required: true, minlength: [3, 'Firstname must be at least 3 characters long'],
            lastname: { type: String, required: true, minlength: [3, 'Lastname must be at least 3 characters long'] },
        },
    },
    email: { type: String, required: true, unique: true, lowercase: true, match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'] },
    password: { type: String, required: true },
    socketId: { type: String },
    status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
    vehicle: {
        color: { type: String, required: true, minlength: [3, 'Color must be at least 3 characters long'] },
        plate: { type: String, required: true, minlength: [3, 'Plate must be at least 3 characters long'] },
        capacity: { type: Number, required: true, min: [1, 'Capacity must be at least 1'] },
        vehicleType: { type: String, required: true, enum: ['car', 'bike', 'auto'] }
    },
    location: {
        lat: { type: Number },
        lng: { type: Number }
    }

}, { timestamps: true });

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}
captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}
captainSchema.statics.hashPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

const captainModel = mongoose.model('captain', captainSchema);
    
module.exports = captainModel; 