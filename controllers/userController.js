const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then(results => res.json(results))
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .populate({ path: 'friends', populate: { path: 'friends' }, select: ('-__v') })
            .populate({path: 'thoughts', populate: { path:'reactions'}, select: ('-__v')})
            .then((user) =>
                !user ? res.status(404).json({ message: 'No thoughts with that ID' })
                    : res.json(user))
            .catch((err) => res.status(500).json(err))
      
    },
    createNewUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.UserId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    DeleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user ? res.json({ message: 'no user by that ID' })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } }))
            .then(() => res.json({ message: 'user and thoughts removed' }))
            .catch((err) => res.status(500).json(err))
    },
    removeFriend(req, Res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: { _id: req.params.friendId } } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body.friends } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }
}