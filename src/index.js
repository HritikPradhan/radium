const express = require('express');
const moment = require('moment');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const midGlb= function (req, res, next) {
    let ip =req.ip
    //console.log(ip)
    let date = moment().format('MMMM Do YYYY, h:mm:ss a');
    //console.log(date);
    let search = req.url
    //console.log(search)
    let all = "your IP"+ip+","+"your date"+"-"+date+","+"your url"+"-"+search ;
    console.log(all);
    //logic
    next()    
}

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/pkDB?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log('mongodb running and connected'))
    .catch(err => console.log(err))





app.use(midGlb);
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});