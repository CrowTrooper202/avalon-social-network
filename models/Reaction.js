const { schema, Types } = require('mongoose');

const reactionSchema = new schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        ReactionBody:{
            type: String,
            required: true,
            max: 280,
        },
        username:{
            type: String,
            required: true
        },
        createdAt:{
            type: Date,
            default: Date.now(),
            required: getters
        },
    }
)

module.export = reactionSchema