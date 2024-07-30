const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendanceModel'); // Assuming you have an Attendance model

// Create new attendance record
router.post('/', async (req, res) => {
    try {
        const { employeeId, date, status, checkInTime, checkOutTime } = req.body;

        const newAttendance = new Attendance({
            employeeId,
            date,
            status,
            checkInTime,
            checkOutTime
        });

        await newAttendance.save();
        res.status(201).send(newAttendance);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Get all attendance records
router.get('/', async (req, res) => {
    try {
        const attendances = await Attendance.find();
        res.status(200).send(attendances);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Get attendance record by employeeId
router.get('/:employeeId', async (req, res) => {
    try {
        const { employeeId } = req.params;
        const attendances = await Attendance.find({ employeeId });

        if (!attendances.length) {
            return res.status(404).send({ message: 'Attendance records not found' });
        }

        res.status(200).send(attendances);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Update attendance record
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status, checkInTime, checkOutTime } = req.body;

        const updatedAttendance = await Attendance.findByIdAndUpdate(
            id,
            { status, checkInTime, checkOutTime },
            { new: true, runValidators: true }
        );

        if (!updatedAttendance) {
            return res.status(404).send({ message: 'Attendance record not found' });
        }

        res.status(200).send(updatedAttendance);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Delete attendance record
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedAttendance = await Attendance.findByIdAndDelete(id);

        if (!deletedAttendance) {
            return res.status(404).send({ message: 'Attendance record not found' });
        }

        res.status(200).send({ message: 'Attendance record deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;

