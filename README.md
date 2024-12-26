# Project_MEN


userModel
    fullname:String,
    email:String,
    password:String,
    cart:Array,
    isAdmin:{type:Boolean,default:false},
    order:Array,
    contact:Number,
    picture:String,


productModel
    name:String,
    image:String,
    price:Number,
    discount:Number,
    bgcolor:String,
    textcolor:String,
    panelcolor:String,

console.log(process.env.DEBUG)
export DEBUG='development:*'
console.log(process.env.NODE_ENV)
export NODE_ENV=development   

route part 
    / => signup or login
    /shop =>shop
    /user/cart => cart
    /admin => admin panel
    /owner/products => show all products
    /owner/admin => show admin panel to create products



