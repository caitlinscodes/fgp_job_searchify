const router = require("express").Router();

// Import any controllers needed here
const {
  getAllJobs,
  getJobById,
  createJobs,
} = require("../../controllers/job-controller");

// Declare the routes that point to the controllers above
router.route("/").get(getAllJobs);
router.route("/").post(createJobs);

router.route("/:id").get(getJobById);

module.exports = router;
