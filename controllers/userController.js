const { User, Thought} = require('../models');

module.exports ={
    getUsers(req, res){
        User.find()
    },
    getSingleUser(req,res) {
        User.findOne({_id: req.params.userId})
        .populate('thoughts')
        .select('-__v')
        .then((user)=>
        !course ?  res.status(404).json({ message: 'No course with that ID' })
        : res.json(course) )
        .catch((err)=> res.status(500).json(err))
        .populate('users')
        .select('-__v')
        .then((user)=>
        !course ?  res.status(404).json({ message: 'No course with that ID' })
        : res.json(course) )
        .catch((err)=> res.status(500).json(err))
    },
    createNewUser(req, res){
        User.create(req.body)
        .then((user)=> res.Json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    updateUser(req, res){
        User.findOneAndUpdate(
            {_id: req.params.UserId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((user)=>
        !course
          ? res.status(404).json({ message: 'No course with this id!' })
          : res.json(course))
        .catch((err) => res.status(500).json(err));  
    },
    DeleteUser(req, res){
        User.findOneAndDelete({_id: req.params.userId})
        .then((user)=>
        !user ?res.json({message: 'no user by that ID'})
        :Thought.deleteMany({_id: {$in:user.thoughts}}))
        .then(()=> res.json({mesage: 'user and thoughts removed'}))
        .catch((error)=>res.status(500).json(err))
    }
}