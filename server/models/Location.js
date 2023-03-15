const { Schema, model } = require('mongoose');


const locationSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    departments: {
        type: String,
        required: false,
        trim: true,
    },
    officers: 
        {
            type: String,
            ref: "Officer",
            required: false
        },
    city: {
        type: String,
        required: false,
        trim: true
    }
})



const Location = model("Location", locationSchema)

module.exports = Location