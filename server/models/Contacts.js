const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    prefix: {
        type: String
    },
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    },
    nickName: {
        type: String
    },
    typeOfNumber: {
        type: String
    },
    contactNumber: {
        type: Number
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    birthday: {
        type: String
    }
});

module.exports = Contact = mongoose.model('contact', contactSchema);