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
.put(addFriend)
.get(getSingleUser)
.put(updateUser)
.delete(DeleteUser)
// .delete(removeFriend);

router.route('/userId/:friendId')
.delete(removeFriend)

module.exports =router