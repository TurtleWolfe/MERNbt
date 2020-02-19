const express = require('express');
const router = express.Router();

// @route    POST api/users
// @desc     Register Profile
// @access   Public
router.get('/', (req, res) => {
    res.send(('Profile Route'));
});

module.exports = router;