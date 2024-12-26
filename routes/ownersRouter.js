const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

if(process.env.NODE_ENV === 'development'){
     router.post('/create',async(req,res)=>{
        let owner = await ownerModel.find()
        if(owner.length > 0){
            return res.status(501).send('owner already exist')
        }
        let {fullname,email,password} = req.body
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
        })
        
        res.status(200).send(createdOwner)
    })
};
router.get('/', (req, res) => {
    res.send('owner route')
})

module.exports = router;