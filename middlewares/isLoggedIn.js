const jwt = require('jsonwebtoken')
const userModel = require('../models/user-model')

module.exports = async function (req, res, next) {
    let token = req.cookies.token
    if (!token) {
        req.flash('error', 'Please login first')
        return res.redirect('/')
    }
    try {
        let decoded = jwt.verify(token, process.env.JWT_KEY)
        let user = await userModel.findById(decoded.id).select('-password')
        if (!user) {
            return res.status(401).send('Unauthorized')
        }
        req.user = user
        next()
    } catch (err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}
