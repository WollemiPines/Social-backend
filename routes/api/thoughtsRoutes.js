const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  createReaction,
  deleteReaction,
  updateThought,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:thought:id
router.route('/:id').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/thought/:thoughtid/reactions
router.route('/:id/reactions').post(createReaction).delete(deleteReaction);


module.exports = router;
