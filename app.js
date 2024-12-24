const express =  require('express')
const app = express()
const cookieParser = require('cookie-parser')
const path = require('path')
const dbConnect = require('./config/mongoose-connection')
const ownerRouter = require('./routes/ownersRouter')
const userRouter = require('./routes/usersRouter')
const productRouter = require('./routes/productsRouter')


app.set('view engine','ejs')
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/owners',ownerRouter)
app.use('/users',userRouter)
app.use('/products',productRouter)

app.get('/',(req,res)=>{
	res.send('hi hello')
})

const PORT = 3000
app.listen(PORT,()=>{
console.log(`Server is listening at http://localhost:${PORT}`)
})


