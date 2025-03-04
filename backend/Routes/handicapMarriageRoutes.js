import express from 'express'; 

const handicapMarriageRoutes = express.Router();
import HandicapMarriage from '../models/handicapRegistrationSchema.js';

handicapMarriageRoutes.post('/hregister', async (req, res) => {
    try {
        const hNewUser = new HandicapMarriage(req.body);
        await hNewUser.save();
        res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

export default handicapMarriageRoutes;