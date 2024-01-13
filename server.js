const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const routes = require('./routes/crud.router');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({    extended: false,    limit: "50mb",}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(function (req, res, next) {   
    res.setHeader('Access-Control-Allow-Origin', '*');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');    
    res.setHeader('Access-Control-Allow-Credentials', true);    next();});

app.use("/v5",routes)

 const PORT = 8000 ;

  app.listen(PORT , ()=>{
       console.log(`Listening on ${PORT}...`);
   });

   async function startserver(){
    // useNewUrlParser: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
    // useUnifiesTopology: true,
   }

   startserver();