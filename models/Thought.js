const {schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new schema(
    {
        thoughtText:{
            type: String,
            required: true,
            min: 1,
            max: 280,
        },
        createdAt:{
            type: Date,
            default: Date.now(),
            required: getters
        },
        username:{
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    }
)

const thought = model('thought', thoughtSchema);

module.exports = Thought;