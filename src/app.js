// importing nessesory packages 
const express = require("express");
const app = express();
const path = require("path");

// setting Paths variables
const static_Path = path.join(__dirname, "../public");
const view_Path = path.join(__dirname, "/views");



// connection to DB
require("../src/config/database").connectDB();

// const variables 
const port  = process.env.PORT || 4000;

// middle wares 
app.use(express.json()); // for decode or convert the object to json format
app.set('views', view_Path); 

app.set('view engine', 'hbs'); // Setting Path 
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_Path)); // Setting Path  


// mountings 
const authRouter = require("./routes/AuthRoute");
app.use("/addmission",authRouter)
app.use("/get",authRouter)
app.use("/getSingle",authRouter)


 

// Default Routes 
app.get("/",(req,res)=>{
        res.render("index");
});

app.get("/singleStud/:id",(req,res)=>{
    res.render("singleStudent");
});

app.get("/addmission",(req,res)=>{
    res.render("Addmisssion");
});








// server Listening 
app.listen(port,(req,res)=>{
    console.log(`Your Live on Port Number ${port}`);
});


