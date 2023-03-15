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
    officers: [
        {
            type: Schema.Types.ObjectId,
            ref: "Officer"
        }
    ],
    city: {
        type: String,
        required: false,
        trim: true
    }
})



const Location = model("Location", locationSchema)

module.exports = Location