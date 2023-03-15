const { Schema, model } = require('mongoose');

const departmentSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    officers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Officer',
    }
]
});

const Department = model('Department', departmentSchema);

module.exports = Department;