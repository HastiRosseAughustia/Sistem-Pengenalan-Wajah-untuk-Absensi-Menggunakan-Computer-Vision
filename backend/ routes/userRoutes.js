const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Assuming you have a User model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register new user
router.post('/register', async (req, res) => {
    try {
        const { username, password, email, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            password: hashedPassword,
            email,
            role
        });

        await newUser.save();
        res.status(201).send({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// User login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).send({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Get user by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Update user
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, role } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { username, email, role },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Delete user
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;

