import { Router } from "express";
import { validateJobInput } from "../middleware/validationMiddleware.js";

import { validateId } from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

const router = Router();

import {
  getAllJobs,
  updateJob,
  getJob,
  deleteJob,
  createJob,
  showStats,
  getAllJobsInDb,
} from "../controllers/jobController.js";

router.route("/allJobs").get(getAllJobsInDb);


router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);
router
  .route("/:id")
  .get(validateId, getJob)
  .patch(checkForTestUser, validateJobInput, updateJob)
  .delete(checkForTestUser, validateId, deleteJob);

export default router;
