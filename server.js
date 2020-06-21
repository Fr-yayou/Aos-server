const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require("passport")

const app = express ()
const users = require("./routes/user")

//Body-parser middleware//
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// Configuration DataBase//
const db = require('./config/keys').mongoURI

//Connect DB//
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=> console.log("MongoDB connected"))
.catch(err => console.log(err))

//Passport middleware//
app.use(passport.initialize())

//Passport config//
require("./passport/passport")(passport)

//Routes//

app.use("/api/users",users)

const port = process.env.PORT || 5000

//ouvrir app sur le port 5000
app.listen(port,()=> console.log(`Up and running on port ${port}`))