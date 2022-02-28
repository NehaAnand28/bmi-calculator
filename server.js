const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.listen(port,() => {
    console.log("Server started on port " + port);
});