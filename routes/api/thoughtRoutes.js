const router = require('express').Router();

const{
    getThoughts,
    getSingularThought,
    createNewThought,
    updateThought,
    deleteThought,
    CreateReaction,
    deleteReaction,
} =require('../../controllers/thoughtController')

router.route('/')
.get(getThoughts)
.get(getSingularThought)
.post(createNewThought)
.put(updateThought)
.delete(deleteThought)

router.route('/:thoughtID/reaction')
.put(CreateReaction)
.delete(deleteReaction)