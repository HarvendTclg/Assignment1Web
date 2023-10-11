const express = require("express")
const app = express()

//for router
const homepageRoute = require('./routes/index');


// Use the route files
app.use('/', homepageRoute);


//allowing the view engine to use ejs format for the page
app.set("view engine","ejs")

//allow the ejs file to access media within the public folder
app.use(express.static(__dirname+'/public'))

app.listen(3000, () =>{
    console.log('Server run in localhost:3000')
})