import express from "express";
import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import { applyJob, getMyApplications } from "../controllers/applicationController.js";


const router = express.Router();


router.post("/", protect, upload.single("resume"), applyJob);
router.get("/my", protect, getMyApplications);


export default router;