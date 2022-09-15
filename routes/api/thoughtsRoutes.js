const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:thought:id
router.route('/:id').get(getSingleThought).delete(deleteThought);

// /api/thought/:thoughtid/reactions
router.route('/:thoughtid/reactions').post(createReaction).delete(deleteReaction);


module.exports = router;
