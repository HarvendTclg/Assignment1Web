const express = require("express")
const app = express()

//for router
const homepageRoute = require('./routes/index');


// Use the route files
app.use('/', homepageRoute);



app.set("view engine","ejs")



//allow css to be accessed
app.use(express.static(__dirname + '/public'));

app.listen(3000, () =>{
    console.log('Server run in localhost:3000')
})