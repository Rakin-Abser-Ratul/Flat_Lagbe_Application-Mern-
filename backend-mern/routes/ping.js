const express = require('express');
const router = express.Router();

// Responds instantly without hitting the database
router.get('/', (req, res) => {
  res.status(200).json({ status: 'awake', framework: 'Express/MERN' });
});

module.exports = router;