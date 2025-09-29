const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
    fullname,
    email,
    password,
    vehicle
}) => {
    // Add debug logging for incoming data
    console.log('createCaptain received:', { fullname, email, password, vehicle });
    if (
        !fullname ||
        !fullname.firstname ||
        !fullname.lastname ||
        !email ||
        !password ||
        !vehicle ||
        !vehicle.color ||
        !vehicle.plate ||
        !vehicle.capacity ||
        !vehicle.vehicleType
    ) {
        throw new Error('All fields are required');
    } 
    const existingCaptain = await captainModel.findOne({ email });
    if (existingCaptain) {
        throw new Error('Captain with this email already exists');
    }
    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captainModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password: hashedPassword,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType // Ensure this is present and correctly named
        }
    });
    console.log('Creating captain with vehicle:', vehicle);
    return captain;
}
