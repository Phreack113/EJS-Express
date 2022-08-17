const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
    res.json({
        miPrimeraApi : 'Works!'
    });
});

module.exports = router;