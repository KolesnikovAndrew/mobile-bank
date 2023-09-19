const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/", async (req, res) => {
  try {
    const userId = "1";
    let userData, activitiesData, atmsData;

    try {
      userData = await db.getUserData(userId);
    } catch (userError) {
      console.error(userError);
      userData = null;
    }

    try {
      activitiesData = await db.getActivitiesData();
    } catch (activitiesError) {
      console.error(activitiesError);
      activitiesData = null;
    }

    try {
      atmsData = await db.getAtmsData();
    } catch (atmsError) {
      console.error(atmsError);
      atmsData = null;
    }

    res.json({
      userData: userData,
      activitiesData: activitiesData,
      atmsData: atmsData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
