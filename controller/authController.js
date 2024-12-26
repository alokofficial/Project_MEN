const userModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {generateToken} = require('../util/generateToken')


module.exports.regesterUser = async function (req, res) {
    try{
        const {email, password, fullname} = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const user =  await userModel.findOne({email})
        if(user){
            return res.status(501).send('user already exist')
        }else{
            let createdUser = await userModel.create({
                fullname,
                email,
                password:hashedPassword,
            })
            const token = generateToken(createdUser)
            res.cookie('token',token)
           
            res.status(200).send(createdUser)
        }

    }catch(err){
        console.log(err.message)
        res.status(500).send(err.message)
    }
}

module.exports.loginUser = async function(req,res){
    const {email,password} = req.body
    const user = await userModel.findOne({email})
    if(user){
        const isMatch = await bcrypt.compare(password, user.password)
        if(isMatch){
            const token = generateToken(user)
            res.cookie('token',token)
            res.status(200).send(user)

        }
        else{
            res.status(501).send('invalid email or password')
        }

    }else{
        res.status(501).send('user not found')
    }
}