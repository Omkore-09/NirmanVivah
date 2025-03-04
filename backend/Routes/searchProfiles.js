import express from "express";
const router = express.Router();
import Profile from "../models/Profile.js";

// Search Profiles API
router.get("/search", async (req, res) => {
    try {
        const { state, district, taluka, city } = req.query;

        // Build query dynamically based on available filters
        let query = {};
        if (state) query.state = state;
        if (district) query.district = district;
        if (taluka) query.taluka = taluka;
        if (city) query.city = city;

        // Fetch matching profiles from MongoDB
        const profiles = await Profile.find(query);

        if (profiles.length === 0) {
            return res.status(404).json({ message: "No profiles found for the selected location." });
        }

        res.json(profiles);
    } catch (error) {
        console.error("Error fetching profiles:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;
