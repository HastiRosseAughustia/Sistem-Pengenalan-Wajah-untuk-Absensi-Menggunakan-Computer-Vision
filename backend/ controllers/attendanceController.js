const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define Attendance Schema
const attendanceSchema = new mongoose.Schema({
    employeeId: { type: String, required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['Present', 'Absent', 'Late'], required: true },
    checkInTime: { type: String },
    checkOutTime: { type: String }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

// Create new attendance record
router.post('/attendance', async (req, res) => {
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
router.get('/attendance', async (req, res) => {
    try {
        const attendances = await Attendance.find();
        res.status(200).send(attendances);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Get attendance record by employeeId
router.get('/attendance/:employeeId', async (req, res) => {
    try {
        const { employeeId } = req.params;
        const attendances = await Attendance.find({ employeeId });

        if (!attendances) {
            return res.status(404).send({ message: 'Attendance records not found' });
        }

        res.status(200).send(attendances);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Update attendance record
router.put('/attendance/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status, checkInTime, checkOutTime } = req.body;

        const updatedAttendance = await Attendance.findByIdAndUpdate(
            id

