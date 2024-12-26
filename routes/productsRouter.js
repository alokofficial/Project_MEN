const express = require('express');
const router = express.Router();
const upload = require('../config/multer-config')
const productModel = require('../models/product-model')


router.post('/create',upload.single('image'), async(req, res) => {
    try{
        const {name,price,discount,bgcolor,textcolor,panelcolor} = req.body
        let product = await productModel.create({
            name,
            image: req.file.buffer,
            price,
            discount,
            bgcolor,
            textcolor,
            panelcolor,
        })
        req.flash('success', 'product created successfully')
        res.redirect('/owners/admin')
    }catch(err){
        console.log(err.message)
        res.status(500).send(err.message)
    }
})

module.exports = router;