const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
    ratings: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Feedback',
    },
],
});

//Save password
usersSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

//Compare password
usersSchema.methods.isCorrectPassword = async function (password) {
await bcrypt.compare(password, this.password);
};

const Users = model('Users', usersSchema);

module.exports = Users