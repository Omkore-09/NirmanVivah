// const express = require('express');
// const Registration = require('../models/Registration');
import express from 'express';
import Registration from '../models/Registration.js';

const newRegistrationRoutes= express.Router();

// Register a new user
newRegistrationRoutes.post('/register', async (req, res) => {
    try {
        const newUser = new Registration(req.body);
        await newUser.save();
        res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

// // Get all users (for admin panel if needed)
// router.get('/users', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch users' });
//     }
// });


export default newRegistrationRoutes;
