const router = require('express').Router();

// Test router
router.get('', (req, res) => {
  res.status(200).json({
    welcom: 'Hi',
  });
});

module.exports = router;
