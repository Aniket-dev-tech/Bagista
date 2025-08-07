const express = require('express');
const router = express.Router();
const {registerUser} = require("../controllers/authControl")

router.get('/', (req, res) => {
    res.send('Hey its working!');
})

router.post('/register', registerUser)

module.exports = router;