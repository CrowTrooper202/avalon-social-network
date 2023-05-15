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


router.route('/:thoughtid')
.get(getSingularThought)
.put(updateThought)
.delete(deleteThought)

router.route('/:thoughtID/reaction')
.put(addReaction)
.delete(deleteReaction)

module.exports =router