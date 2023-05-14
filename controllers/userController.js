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
    },
}