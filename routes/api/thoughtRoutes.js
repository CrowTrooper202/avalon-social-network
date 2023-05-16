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


router.route('/:thoughtId/reactions')
.put(addReaction)

router.route('/:thoughtId/reactions/reactionId')
.delete(deleteReaction)

module.exports =router