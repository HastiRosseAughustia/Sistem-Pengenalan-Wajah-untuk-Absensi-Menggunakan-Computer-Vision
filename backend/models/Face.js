const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Face schema
const faceSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    image: {
        type: Buffer, // Store the image as binary data
        required: true
    },
    imageType: {
        type: String, // Store the MIME type of the image
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Face model
const Face = mongoose.model('Face', faceSchema);

module.exports = Face;

