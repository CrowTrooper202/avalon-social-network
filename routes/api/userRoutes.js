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



router.route('/:userId')

.get(getSingleUser)
.put(updateUser)
.delete(DeleteUser)

router.route('/:userId/friend/:friendId')
.delete(removeFriend)
.put(addFriend)

module.exports =router