const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createNewUser,
    updateUser,
    DeleteUser,
} =require('../../controllers/userController');

router.route('/').get(getUsers).post(createNewUser).get(getSingleUser).put(updateUser).delete(DeleteUser);

router.route('/:userId').post(newFriend);

router.route('/:friendId').delete(removeFriend)