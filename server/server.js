const path = require('path');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


const express = require('express');
var app = express();

app.use(express.static(publicPath));

var server = app.listen(port, () => {
    console.log(`The port number is ::: ${port}`)
    console.log("The IP address is :::  " + server.address().address);
    console.log("The IP family is :::   " + server.address().family)
});