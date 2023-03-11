const { Schema, model } = require('mongoose');

const usersSchema = new Schema ({
    username: {
        type: StringOrInt, 
        required: true,
        trim: true,
    },
    password: {
        type: StringOrInt,
        required: true,
        trim: true,
    },
    ratings: {
        type: StringOrInt, 
        required: true, 
        trim: true 
    }

});

const Users = model('Users', usersSchema); 

module.exports = Us