const moment = require('moment');

// Format a date to a readable format
const formatDate = (date) => {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
};

// Validate an email address
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Generate a random string of a given length
const generateRandomString = (length) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset[randomIndex];
    }
    return result;
};

// Capitalize the first letter of a string
const capitalizeFirstLetter = (str) => {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Calculate the age from a given date of birth
const calculateAge = (dob) => {
    const birthDate = moment(dob);
    const today = moment();
    return today.diff(birthDate, 'years');
};

// Export the functions
module.exports = {
    formatDate,
    isValidEmail,
    generateRandomString,
    capitalizeFirstLetter,
    calculateAge
};

