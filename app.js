const express = require("express");
const https = require("https");
const app = express();


app.get("/", function (req, res) {
res.sendFile(__dirname+ "/index.html");

    // const location = "Lagos";
    // const apiKey = "0a4b2a6c74e97a23633edd8d5b095612";
    // const metric="metric";
    // const url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey+"&units="+metric;
    // https.get(url, function (response) {
    //     console.log(response.statusCode); //get statuscode

    //     response.on("data", function (data) { //read data from api
    //         // console.log(data); //gives data in hex
    //         const weatherData = JSON.parse(data); //converts data to JSON
    //         //console.log(weatherData);
    //         const temp = weatherData.main.temp;
    //         const weatherDes = weatherData.weather[0].description;
    //         const icon = weatherData.weather[0].icon;
    //         const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    //         console.log(weatherDes);
    //         res.write("<p>The weather is currently " + weatherDes + "</p>");
    //         res.write("<h1>The temperature in " + location + " is " + temp + " degree.</h1>");
    //         res.write("<img src=" + imageURL + ">");
    //         res.send();
    //     });
    // });


});
app.listen(3000, function () {

    console.log("server is running on port 3000");
});