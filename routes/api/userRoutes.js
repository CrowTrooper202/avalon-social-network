const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createNewUser,
    updateUser,
    DeleteUser,
    removeFriend,
    addFriend,
} =require('../../controllers/userController');

router.route('/')
.get(getUsers)
.post(createNewUser)
.get(getSingleUser)
.put(updateUser)
.delete(DeleteUser);

router.route('/:userId')
.post(addFriend);

router.route('/:friendId')
.delete(removeFriend)