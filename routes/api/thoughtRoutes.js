const router = require('express').Router();

const{
    getThoughts,
    getSingularThought,
    createNewThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} =require('../../controllers/thoughtController')

router.route('/')
.get(getThoughts)
.post(createNewThought)


router.route('/:thoughtId')
.get(getSingularThought)
.put(updateThought)
.delete(deleteThought)
.post(addReaction)


router.route('/:thoughtId/reactionId')
.delete(deleteReaction)

module.exports =router