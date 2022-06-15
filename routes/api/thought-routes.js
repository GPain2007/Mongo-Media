const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controller/thought-controller");

//api/thoughts
router.route("/").get(getAllThoughts);
router.route("/:thought").get(getThoughtById);

// /api/thoughts/<userId>
router.route("/").post(addThought);
router.route("/:thoughtId").put(addReaction).delete(removeThought);

// /api/thoughts/<userId>/<thoughttId>
router.route("/:thoughtId").delete(removeThought);
router.route("/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
