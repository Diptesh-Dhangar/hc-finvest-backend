import express from "express";
import {
  createRegistration,
  getAllRegistrations,
  deleteRegistration,
} from "../Controllers/RegistratioinController.js";

const router = express.Router();

// POST → Add registration
router.post("/", createRegistration);

// GET → Fetch all registrations
router.get("/", getAllRegistrations);

// DELETE → Remove registration by ID
router.delete("/:id", deleteRegistration);

export default router;
