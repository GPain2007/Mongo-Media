const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controller/user-controller");

// Set up GET all and POST at /api/users
// /api/users
router.route("/").get(getAllUsers).post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
// /api/user/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
