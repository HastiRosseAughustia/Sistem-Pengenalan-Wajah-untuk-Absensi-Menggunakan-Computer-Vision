const express = require('express');
const router = express.Router();

// Impor kontroler
const attendanceController = require('./controllers/attendanceController');
const faceController = require('./controllers/faceController');
const userController = require('./controllers/userController');

// Rute untuk Attendance
router.get('/attendance', attendanceController.getAllAttendances);
router.post('/attendance', attendanceController.createAttendance);
router.get('/attendance/:id', attendanceController.getAttendanceById);
router.put('/attendance/:id', attendanceController.updateAttendance);
router.delete('/attendance/:id', attendanceController.deleteAttendance);

// Rute untuk Face
router.post('/face/scan', faceController.scanFace);
router.get('/face/:id', faceController.getFaceById);
router.delete('/face/:id', faceController.deleteFace);

// Rute untuk User
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;

