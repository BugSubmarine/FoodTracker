const express = require('express');
const router = express.Router();
const Tracker = require('../models/tracker');

router.get("/", async (req, res) => {
  const logs = await Tracker.find();
  res.json(logs);
});

module.exports = router;