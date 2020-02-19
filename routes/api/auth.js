const express = require('express');
const router = express.Router();

// @route    POST api/users
// @desc     Register Auth
// @access   Public
router.get('/', (req, res) => {
    res.send(('Auth Route'));
});

module.exports = router;