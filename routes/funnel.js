const express = require('express');
const router = express.Router();
const FunnelData = require('../models/FunnelData');

// Get all funnel data
router.get('/', async (req, res) => {
  try {
    const data = await FunnelData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get funnel data by date range
router.get('/range', async (req, res) => {
  const { start, end } = req.query;

  try {
    const data = await FunnelData.find({
      date: {
        $gte: new Date(start),
        $lte: new Date(end)
      }
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new funnel data
router.post('/', async (req, res) => {
  const funnelData = new FunnelData({
    stage: req.body.stage,
    value: req.body.value
  });

  try {
    const newData = await funnelData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
