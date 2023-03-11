const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    ratings: {
        type: Number,
        required: true,
        trim: true
    }

});

const Users = model('Users', usersSchema);

module.exports = Users