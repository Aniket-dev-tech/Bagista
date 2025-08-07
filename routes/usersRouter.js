const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require("../controllers/authControl")

router.get('/', (req, res) => {
    res.send('Hey its working!');
})

router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router;