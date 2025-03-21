const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Teacher name is required'],
        minlength: [3, 'Teacher name must be at least 3 characters long']
    },
    phone: {
        type: Number,
        required: [true, 'Teacher phone number is required'],
        min: [1000000000, 'Phone number must be 10 digits long'],
        max: [9999999999, 'Phone number must be 10 digits long']
    },
    email: {
        type: String,
        required: [true, 'Teacher email is required'],
        unique: [true, 'Email already exists'],
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    course: {
        type: String,
        required: [true, 'Course name is required'],
        enum: ['math', 'science', 'history', 'english', 'art', 'music'],
        lowercase: true
    },
    experience: {
        type: Number,
        default: 0
    }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;