const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports= {
    getThoughts(req, res){
        Thought.find()
        .then(results => res.json(results))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    getSingularThought(req, res){
        Thought.findOne({_id: req.params.thoughtId})
        .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thoughts with this id!' })
                    : res.json(thought))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    createNewThought(req, res){
        Thought.create(req.body)
            .then((Thought) => {
            //how to push though into user's id array
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$push:{thoughts: Thought._id}},
                {runValidators: true, new: true})
            }
            )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    updateThought(req, res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res){
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought ? res.json({ message: 'no thought by that ID' })
                    : Reaction.deleteMany({ _id: { $in: thought.reactions } }))
            .then(() => res.json({ message: 'thought and reactionss removed' }))
            .catch((error) => res.status(500).json(err))
    },
    addReaction(req, res){
        console.log('you are adding a reaction');
        console.log(req.body);
        Thought.findOneAndUpdate(
            {_id:req.params.thoughtId},
            {$addToSet: {reactions:req.body}},
            {runValidators:true, new: true}
        )
        .then((thought)=>
        !thought
        ? res
        .status(404)
        .json({message: 'no thought found with that id'})
        :res.json(thought))
        .catch((err)=> res.status(500).json(err))
    },
    deleteReaction(req, res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: {reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    }
    }
