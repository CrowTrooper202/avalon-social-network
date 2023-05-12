const {schema, model} = require('mongoose');
const thoughtSchema = require('./Though');


const studentSchema = new schema(
    {
        username:{
            type:String,
            required: true,
            unique: true,
            trim: true,
        },
        email:{
            type: String,
            validate: [validator, `/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/`],
            required: true,
            unique:true,

        },
        thoughts: [thoughtSchema],
        friends: [studentSchema],
    }
)

const Student = model('student', studentSchema);

module.exports = Student;