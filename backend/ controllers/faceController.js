const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const faceRecognitionService = require('../services/faceRecognitionService'); // Assuming you have a separate service for face recognition

// Define Face Schema
const faceSchema = new mongoose.Schema({
    employeeId: { type: String, required: true },
    faceData: { type: Buffer, required: true } // Store face data as binary data
});

const Face = mongoose.model('Face', faceSchema);

// Register face data
router.post('/face/register', async (req, res) => {
    try {
        const { employeeId, faceData } = req.body;

        const newFace = new Face({
            employeeId,
            faceData: Buffer.from(faceData, 'base64') // Convert base64 to binary
        });

        await newFace.save();
        res.status(201).send(newFace);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Recognize face and mark attendance
router.post('/face/recognize', async (req, res) => {
    try {
        const { faceData } = req.body;
        const faceBuffer = Buffer.from(faceData, 'base64'); // Convert base64 to binary

        const recognizedEmployeeId = await faceRecognitionService.recognize(faceBuffer);

        if (!recognizedEmployeeId) {
            return res.status(404).send({ message: 'Face not recognized' });
        }

        const attendance = {
            employeeId: recognizedEmployeeId,
            date: new Date(),
            status: 'Present',
            checkInTime: new Date().toLocaleTimeString()
        };

        // Save the attendance record (Assuming you have an Attendance model)
        const newAttendance = new Attendance(attendance);
        await newAttendance.save();

        res.status(200).send({ message: 'Attendance marked', attendance: newAttendance });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Get face data by employeeId
router.get('/face/:employeeId', async (req, res) => {
    try {
        const { employeeId } = req.params;
        const face = await Face.findOne({ employeeId });

        if (!face) {
            return res.status(404).send({ message: 'Face data not found' });
        }

        res.status(200).send(face);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Update face data
router.put('/face/:employeeId', async (req, res) => {
    try {
        const { employeeId } = req.params;
        const { faceData } = req.body;

        const updatedFace = await Face.findOneAndUpdate(
            { employeeId },
            { faceData: Buffer.from(faceData, 'base64') },
            { new: true, runValidators: true }
        );

        if (!updatedFace) {
            return res.status(404).send({ message: 'Face data not found' });
        }

        res.status(200).send(updatedFace);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Delete face data
router.delete('/face/:employeeId', async (req, res) => {
    try {
        const { employeeId } = req.params;

        const deletedFace = await Face.findOneAndDelete({ employeeId });

        if (!deletedFace) {
            return res.status(404).send({ message: 'Face data not found' });
        }

        res.status(200).send({ message: 'Face data deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;

