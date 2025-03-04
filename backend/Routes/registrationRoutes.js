import express from "express";
import Registration from '../models/Registration.js';
import HandicapMarriage from '../models/handicapRegistrationSchema.js';

const router = express.Router();

// Check if a user is registered based on mobile number
router.get("/check-registration/:mobile", async (req, res) => {
  const { mobile } = req.params;

  try {
    let user = await Registration.findOne({ number: mobile });
    if (user) {
      return res.json({ type: "normal", user });
    }

    user = await HandicapMarriage.findOne({ number: mobile });
    if (user) {
      return res.json({ type: "handicap", user });
    }

    res.json({ type: "not_registered" });
  } catch (error) {
    console.error("Error checking registration:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
