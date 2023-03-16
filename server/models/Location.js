const { Schema, model } = require('mongoose');


const locationSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    departments: {
        type: String,
        required: false,
        trim: true,
    },
    officers:[
    {
        type: Schema.Types.ObjectId,
        ref: "Officer",
        required: false
    }],
    city: {
        type: String,
        required: true,
        trim: true,
        // unique: true
    },
    searchQuery: {
        type: String,
        required: false,
    },
    ratings: [{
        type: Schema.Types.ObjectId,
        ref: "Feedback",
        required: false
    }]
})



const Location = model("Location", locationSchema)

module.exports = Location