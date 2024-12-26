const express = require('express');
const router = express.Router();
const {regesterUser, loginUser} = require('../controller/authController')



router.get('/', (req, res) => {
    res.send('user route')
})
router.post('/register',regesterUser)

router.post('/login', loginUser )

module.exports = router;