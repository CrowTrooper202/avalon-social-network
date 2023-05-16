const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        // reactionID: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId(),
        //     required: true
        // },
        reactionBody:{
            type: String,
            required: true,
            maxlength: 280,
        },
        username:{
            type: String,
            required: true
        },
        createdAt:{
            type: Date,
            default: Date.now(),
            get:timeStamp=> new Date(timeStamp).toLocaleString()
        },
    },
    {
        toJSON: {
          getters: true,
        },
        // id: false,
      }
)

module.export = reactionSchema