require('dotenv').config();   // loads environment variables from a . env file into process.env 
const mongoose=require('mongoose') //object modeling tool designed to work in an asynchronous environment
const express=require('express')   // provide server-side logic for web and mobile applications

const bodyParser=require('body-parser') // extract the entire body portion of an incoming request stream and exposes it on req
const cookieParser=require('cookie-parser')   //  parses cookies attached to the client request object.
const cors=require('cors') //allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.

const app=express()

//ROUTES
const authRoute=require('./routes/authRoutes')
app.use('/api',authRoute)


//MIDDLEWARES
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())


//CONNECT WITH DB
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>console.log("DB connected successfully")).catch(()=>console.log("Failed to connect db"))



const port=4000;
app.listen(port,()=>{
    console.log(`Server is listening on port no ${port}`)
})