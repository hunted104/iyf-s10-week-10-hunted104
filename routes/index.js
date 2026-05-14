const express = require("express");
const router = express.Router();

const postsRoutes = require("./posts");

router.use("/posts", postsRoutes);

// Health check (shows system readiness)
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "OK",
    uptime: process.uptime()
  });
});

module.exports = router;
