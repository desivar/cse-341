const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

// Add this line to export the router
module.exports = router;